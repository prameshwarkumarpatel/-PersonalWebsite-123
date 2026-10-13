import React from 'react'
import Kist from '../List.json'

export default function Card() {
  // Example: only free books
  const BookList = Kist.filter((book) => book.price === "Free");

  return (
    <div className="flex overflow-x-auto gap-4 p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:bg-slate-900 dark:text-white dark:border">
      {BookList.map((value, id) => (
        <div key={id} className="card bg-base-100 w-72 flex-shrink-0 shadow-sm">
          <figure>
            <img
              src={value.image}
              alt={value.title}
              className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{value.title}</h2>
            <p>{value.author}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{value.price}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
