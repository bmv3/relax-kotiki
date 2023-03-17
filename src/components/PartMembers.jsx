import Member from "./Member";

const PartMembers = ({ members, roles, filter, media }) => {
    const currentMembers = members.filter((item) => item.role_category.indexOf(filter) >= 0);
    return (
        <div className="members">
            {currentMembers.length > 0 ?
                currentMembers.map(({ id, title, member_city, role_category, member_photo, member_link, both }) => {
                    // console.log(media[id])
                    return <Member
                        id={id}
                        key={id.toString()}
                        name={title.rendered}
                        city={member_city}
                        role={both === "1" ? "Обе роли" : roles[role_category]}
                        // photo={member_photo.guid}
                        photo={media[id]}
                        link={member_link}
                        both={both}
                    />
                })
                :
                <p className="members-info">Вот-вот появятся.</p>
            }

        </div>
    )
}

export default PartMembers;