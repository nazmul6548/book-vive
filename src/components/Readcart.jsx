

function Readcart({book}) {
    console.log(book);
    const {review} = book;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
    <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">New movie is released!</h2>
      <p>{review}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>
  )
}

export default Readcart