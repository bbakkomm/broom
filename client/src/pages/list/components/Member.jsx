function Member(props) {
    const domain = [window.location.protocol, window.location.host].join('//') + '/';
    const {member} = props;
    console.log(member);

    return (
        <li className="member__item">
            <img src={ domain + member.thumb.path } alt={ member.name } className="member__img"/>
            <div className="member__info">
                <div className="member__data">
                    <p className="member__title">{member.name}</p>
                    <span className="member__status">NEW</span>
                </div>
                <p className="member__text">{ member.introduce }</p>
            </div>
        </li>
    );
}

export default Member