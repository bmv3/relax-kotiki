import React from "react";

export default function Header({ setSortBy, checked }) {

    const sortByChangeHabdler = (e) => {
        // e.target.checked = true;
        setSortBy(e.target.value);
    }

    return (
        <div>
            <form>
                <center>
                    <p>Сортировать по:
                        <label>
                            <input
                                name="sort"
                                type="radio"
                                onChange={e => sortByChangeHabdler(e)}
                                value="sortByCity"
                                checked={checked === 'sortByCity'}
                            /> городу
                        </label>
                        <label>
                            <input name="sort"
                                type="radio"
                                onChange={e => sortByChangeHabdler(e)}
                                value="sortByName"
                                checked={checked === 'sortByName'}
                            /> имени
                        </label>
                    </p>
                </center>
            </form>
        </div>
    )
}
