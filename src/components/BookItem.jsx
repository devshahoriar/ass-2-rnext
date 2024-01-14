/* eslint-disable react/prop-types */
import {
  AddToCartButton,
  AddtoFavouriteButton,
  RemoveToFavButton,
} from './Buttons'
import Star from './Star'

const BookItem = ({ book, addToFev }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img
          className="max-w-[144px]"
          src={book?.coverImage}
          alt={book?.name}
        />
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl line-clamp-1">
          {book?.name}
        </h4>
        <div className="text-xs lg:text-sm flex justify-between">
          <p className="">
            By : <span>{book?.author}</span>
          </p>
          <p>{book?.pubYear}</p>
        </div>

        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${book?.price}</h4>
          <Star s={book?.star} />
        </div>
        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <AddToCartButton />
          {book?.isFeb ? (
            <RemoveToFavButton clickEv={() => addToFev(book?.id)} />
          ) : (
            <AddtoFavouriteButton clickEv={() => addToFev(book?.id)} />
          )}
        </div>
      </div>
    </div>
  )
}

export default BookItem
