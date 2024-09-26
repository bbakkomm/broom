import { useState } from 'react';

// css
import styles from "../CommonHeader.module.scss";

// icon
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Modal (props) {
  const { ModalClose } = props;
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;
  const handleCopy = () => {

    navigator.clipboard.writeText(currentUrl).then(
      () => {
        setCopied(true);
        // setTimeout(() => setCopied(false), 2000);
        setTimeout(() => setCopied(false),10000000);
      },
      () => {
        alert("URL 복사에 실패했습니다. 다시 시도해주세요.");
      }
    );
  };

  return (
    <>
      { open ? (
          <>
            <div className={styles.dimmed} onClick={ModalClose}/>
            <div className={`${open && styles.modal}`}>
              <div className={styles.modal__titleWrap}>
                <p className={styles.modal__title}>링크 공유</p>
                <CloseRoundedIcon onClick={ModalClose}/>
              </div>
              <div className={styles.modal__content}>
                <input type="text" value={currentUrl} readOnly className={styles.modal__input}/>
                <button onClick={handleCopy} className={styles.modal__btn}>복사</button>
              </div>
              <div className={styles.modal__notice}>
                {copied && "URL이 복사되었습니다!"}
              </div>
            </div>
          </>
        ): null
      }
    </>
  )
}

function ShareBtn() {
  const [modal, setModal] = useState(false);

  const ModalOpen = () => {
    setModal(true);
  };

  const ModalClose = () => {
    setModal(false);
  }; 

  return (
      <>
          <button onClick={ModalOpen} className={styles.header__share}>
              <ShareOutlinedIcon className={styles.share__icon}/>
          </button>
          {modal ? <Modal ModalClose={ModalClose}/> : null}
      </>
  )
}

export default ShareBtn;