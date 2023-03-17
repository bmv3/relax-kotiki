import React, { useEffect, useState } from "react";
import Header from "./Heder";
import fetchMembers from "./fetchMembers";
import fetchRoles from "./fetchRoles"
import fetchMedia from "./fetchMedia"
import PartMembers from "./PartMembers";

import "../members-info.css";

export default function Members(props) {

    const [roles, setRoles] = useState([]);
    const [members, setMembers] = useState([]);
    const [media, setMedia] = useState([]);
    const [sortBy, setSortBy] = useState('sortByName');

    useEffect(() => {
        fetchRoles(setRoles);
        fetchMembers(setMembers);
        fetchMedia(setMedia);
    }, []);

    // console.log(media);

    switch (sortBy) {
        case 'sortByName':
            members.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered));
            break;
        case 'sortByCity':
            members.sort((a, b) => a.member_city.localeCompare(b.member_city));
            break;
        default:
            break;
    }

    return (
        <>
            {members.length > 0 ?
                <>
                    <Header setSortBy={setSortBy} checked={sortBy} />
                    <h2>Фолловеры</h2>
                    <PartMembers members={members} roles={roles} media={media} filter={13} />
                    <h2>Лидеры</h2>
                    <PartMembers members={members} roles={roles} media={media} filter={12} />
                </>
                :
                <>
                    <p className="members-info">Мы ждем новых участников.</p>
                </>}
        </>
    )
}