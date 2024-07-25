import React from 'react'

const Createpost = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12">

            </div><div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">Post a new msg</label>
                    <textarea name="" id="" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                    <button className="btn btn-success">Post</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Createpost
