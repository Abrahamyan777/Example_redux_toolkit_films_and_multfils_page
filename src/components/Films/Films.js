import React from 'react';
import css from './Films.module.css'

const Films = ({films}) => {


    const items = [
        {
          id: 1,
          title: "Some title",
          children_items: [
              {
                  id: 11,
                  parent_id: 1,
                  title: "Some title",
                  children_items: [
                      {
                          id: 111,
                          parent_id: 11,
                          title: "Some title",
                      }
                  ]
              }
          ]
        },
        {
            id: 2,
            title: "Some title",
            children_items: [
                {
                    id: 22,
                    parent_id: 2,
                    title: "Some title",
                    children_items: [
                        {
                            id: 222,
                            parent_id: 22,
                            title: "Some title",
                        }
                    ]
                },
                {
                    id: 23,
                    parent_id: 2,
                    title: "Some title",
                    children_items: [
                        {
                            id: 223,
                            parent_id: 23,
                            title: "Some title",
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Some title"
        },
        {
            id: 4,
            title: "Some title",
            children_items: [
                {
                    id: 44,
                    parent_id: 4,
                    title: "Some title",
                }
            ]
        },
    ]


    return (
        <ul className={css.filmsBlock}>
                {films.map(film => {
                        return <li key={film.title}>
                            {film.title}
                        </li>
                })}
        </ul>
    );
};

export default Films;