import React, { useState } from 'react'

function Categories() {
    const [cats, setCats] = useState(
        [
            {
                name: "anas"
            },
            {
                name: "toka"
            },
            {
                name: "rawan"
            }
        ]
    )
    return (
        <div>
            {cats.map((cat) => {
                return (
                    <div>
                        {cat.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Categories
