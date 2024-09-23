import { body, param, validationResult } from 'express-validator'; // param 파라미터 유효성 체크
import { BadRequestError, NotFoundError, UnauthorizedError } from '../errors/customErrors.js';
import Study from '../models/StudyModel.js';
import User from '../models/UserModel.js';
import mongoose from 'mongoose';

const withValidationErrors = (validateValues) => {
  return [
    validateValues, 
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        // 단일 study 호출 시 400 에러로 반환이 되는데, study을 찾을 수 없는 케이스이니 404로 커스텀 에러 적용
        if (errorMessages[0].startsWith('no study')) {
          throw new NotFoundError(errorMessages);
        }

        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError(errorMessages);
        }

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ]
}

export const validateStudyInput = withValidationErrors([
  // body('company').notEmpty().withMessage('company is required'),
  // body('position').notEmpty().withMessage('position is required'),
  // body('studyLocation').notEmpty().withMessage('study Location is required'),
  // body('studyStatus').isIn(Object.values(JOB_STATUS)).withMessage('invalid status value'),
  // body('studyType').isIn(Object.values(JOB_TYPE)).withMessage('invalid type value'),
]);

export const validateIdParam = withValidationErrors([
  param('id')
    .custom(async (value, { req }) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidId) throw new BadRequestError('invalid MongoDB Id');

      // 반복되는 study 아이디를 찾는 구문을 유효성 미들웨어로 이동시켜 적용
      const study = await Study.findById(value);
      if (!study) throw new NotFoundError(`no study ${value}`);

      const isAdmin = req.user.role === 'admin';
      const isOwner = req.user.userId === study.createdBy.toString();
      if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to acess this route');
    }),
]);

export const validateRegisterInput = withValidationErrors([
  body('uid')
  .notEmpty()
  .withMessage('uid is required')
  .custom(async (uid) => {
    const user = await User.findOne({uid});
    if (user) {
      throw new BadRequestError('uid already exists');
    }
  }),
  body('name').notEmpty().withMessage('name is required'),
  body('email')
  .notEmpty()
  .withMessage('email is required')
  .isEmail()
  .withMessage('invalid email format')
  .custom(async (email) => {
    const user = await User.findOne({email});
    if (user) {
      throw new BadRequestError('email already exists');
    }
  }),
  body('password')
  .notEmpty()
  .withMessage('password is required')
  .isLength({min:8})
  .withMessage('password least 8'),
  body('study')
  .notEmpty()
  .withMessage('study is required'),
  body('skillTag')
  .isArray({min:1})
  .withMessage('skillTag is required'),
]);

export const validateLoginInput = withValidationErrors([
  body('uid')
  .notEmpty()
  .withMessage('uid is required')
  ,
  // body('email')
  // .notEmpty()
  // .withMessage('email is required')
  // .isEmail()
  // .withMessage('invalid email format')
  // ,
  body('password')
  .notEmpty()
  .withMessage('password is required')
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
  .notEmpty()
  .withMessage('email is required')
  .isEmail()
  .withMessage('invalid email format')
  .custom(async (email, { req }) => {
    const user = await User.findOne({email});
    if (user && user._id.toString() !== req.user.userId) {
      throw new BadRequestError('email already exists'); 
    }
  }),
]);

export const validateUidInput = withValidationErrors([
  body('email')
  .notEmpty()
  .withMessage('email is required')
  .custom(async (email) => {
    const user = await User.findOne({email});
    if (!user) {
      throw new BadRequestError('email not exists');
    }
  }),
]);

export const validatePasswordInput = withValidationErrors([
  body('uid')
  .notEmpty()
  .withMessage('uid is required')
  .custom(async (uid) => {
    const user = await User.findOne({uid});
    if (!user) {
      throw new BadRequestError('uid not exists');
    }
  }),
  body('email')
  .notEmpty()
  .withMessage('email is required')
  .custom(async (email) => {
    const user = await User.findOne({email});
    if (!user) {
      throw new BadRequestError('email not exists');
    }
  }),
]);

export const validatePasswordResetInput = withValidationErrors([
  body('password')
  .notEmpty()
  .withMessage('password is required')
  .isLength({min:8})
  .withMessage('password least 8')
  ,
  body('passconfirm')
  .notEmpty()
  .withMessage('passconfirm is required')
  .isLength({min:8})
  .withMessage('passconfirm least 8'),
]);

export const validateIdResetParam = withValidationErrors([
  param('id')
    .custom(async (value, { req }) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidId) throw new BadRequestError('invalid MongoDB Id');

      const user = await User.findById(value);
      if (!user) throw new NotFoundError(`no user ${value}`);
      
      const isAdmin = user.role === 'admin';
      if (isAdmin) throw new UnauthorizedError('Administrator password cannot be changed');

      const isPassConfirm = req.body.password === req.body.passconfirm;
      if (!isPassConfirm) throw new UnauthorizedError('Please check your password again');
    }),
]);