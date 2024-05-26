import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "450px" }}
        >
          <img src="https://up.yimg.com/ib/th?id=OIP.nnvc7KrY1cyn-BCex8cvUwHaLF&pid=Api&rs=1&c=1&qlt=95&w=69&h=103" className="card-img-top" alt="..." style={{maxHeight: "300px"}}/>
          <div className="card-body">
            <h5 className="card-title">Paneer tikka</h5>
            <p className="card-text">This is some imp text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}