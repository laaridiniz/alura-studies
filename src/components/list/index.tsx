import React from 'react';

// class List extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//             </ul>
//         );
//     }
// }

function List() {
    return(
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                <li>
                    <h3>
                        React
                    </h3>
                    <span>
                        02:00:00
                    </span>
                </li>
                <li>
                    <h3>
                        JavaScript
                    </h3>
                    <span>
                        01:00:00
                    </span>
                </li>
            </ul>
        </aside>
    )
}

export default List;