function Member(props) {

    const {member} = props;

    return (
        <li className="member__item">
            <img src={ member.src } alt={ member.name } className="member__img"/>
            <div className="member__info">
                <div className="member__data">
                    <p className="member__title">{member.name}</p>
                    <span className="member__status member__status--new">NEW</span>
                </div>
                <p className="member__text">{ member.text }</p>
            </div>
        </li>
    );
}

export default Member