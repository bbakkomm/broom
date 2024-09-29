function Member(props) {
    const domain = [window.location.protocol, window.location.host].join('//') + '/';
    const {member, create} = props;
    // console.log(member._id, create);

    return (
        <li className="member__item">
            <img src={ domain + member.thumb.path } alt={ member.name } className="member__img"/>
            <div className="member__info">
                <div className="member__data">
                    <p className="member__title">{member.name}</p>
                    { member._id === create ? (<span className="member__status">모임장</span>) : ('')}
                </div>
                <p className="member__text">{ member.introduce }</p>
            </div>
        </li>
    );
}

export default Member