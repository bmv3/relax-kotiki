export default function Member({ id, name, city, role, photo, link, category, both }) {
    return (<div className="member">
        <a href={link}>
            <img src={photo?.source_url} loading="lazy" alt={`${name} (${city})`}  width="120px" heigh="120px" />
        </a>
        <div className="member_info" category={category}>
            <p className="member_name">{name}</p>
            <p className="member_city">{city}</p>
            <p className="member_role" style={{ color: "gray" }}>{both === "1" ? "Обе роли" : role}</p>
        </div>
    </div>
    )
}