import React, { useState } from "react";
import course1 from "../images/course1.png";
import course2 from "../images/course2.png";
import course3 from "../images/course3.png";
import course4 from "../images/course4.png";
import course5 from "../images/course5.png";
import "../scss/content.css";

const Content = () => {
  // const [popUp, setPopup] = useState;
  // const handleFilter = () => {
  //     const id = document.getElementById("filter");
  //     id.classList.add("close");
  // }
  return (
    <div className="content-div">
      <div className="container">
        <div className="sort">
          <div className="course-sort">
            <label>Explore</label>
            <select>
              <option>Courses</option>
              <option>Assessments</option>
              <option>E-Books</option>
              <option>Journeys</option>
              <option>Live Trainings</option>
            </select>
          </div>
          <div className="sort-by">
            <label>Sort By</label>

            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="bi bi-arrow-down-up"></i>
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="course-con">
                      <input type="checkbox" /> <label>Latest Courses</label>
                    </div>

                    <div className="course-con">
                      <input type="checkbox" /> <label>Courses By Owner</label>
                    </div>
                    <div className="course-con">
                      <input type="checkbox" />{" "}
                      <label>Courses By codeblu</label>
                    </div>
                    <div className="course-con">
                      <input type="checkbox" />
                      <label> Lectures : Low to High </label>
                    </div>
                    <div className="course-con">
                      <input type="checkbox" />
                      <label>Lectures : High to Low </label>
                    </div>
                    <div className="course-con">
                      <input type="checkbox" />
                      <label> Hours of content : Low to High </label>
                    </div>
                    <div className="course-con">
                      <input type="checkbox" />{" "}
                      <label>Hours of content : High to Low</label>
                    </div>

                    <button className="mt-2 btn btn-primary">
                      Show Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course-div-content mt-3">
        <div className="row justify-content-between">
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="Course1" />
            <div class="card-body">
              <h5 class="card-title by-codeble">by codeblu</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title by-client">by client</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
          <div class="card col-md-2 ms-1">
            <img src={course1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                The Guide to Computer Programming in Java
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
