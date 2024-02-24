import React from "react";
// import '/nav.css'
import "./nav.css";

export default function Filter() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler px-0"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample5"
            aria-controls="navbarExample5"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarExample5">
            <ul
              class="navbar-nav me-auto ps-lg-0"
              style={{ paddingLeft: " 0.15rem" }}
            >
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Regular link
                </a>
              </li>
              <li class="nav-item dropdown position-static">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mega menu
                </a>
                <div
                  class="dropdown-menu w-100 mt-0"
                  aria-labelledby="navbarDropdown"
                >
                  <div class="container">
                    <div class="row my-4">
                      <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                        <p class="text-uppercase font-weight-bold">
                          Explicabo voluptas
                        </p>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Hollywood Sign on The Hill"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Palm Springs Road"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Los Angeles Skyscrapers"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Skyscrapers"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                        <p class="text-uppercase font-weight-bold">
                          Iste quaerato
                        </p>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Hollywood Sign on The Hill"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Palm Springs Road"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Los Angeles Skyscrapers"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Skyscrapers"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                        <p class="text-uppercase font-weight-bold">
                          Cras justo odio
                        </p>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Hollywood Sign on The Hill"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Palm Springs Road"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row mb-4 border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Los Angeles Skyscrapers"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" class="text-dark">
                          <div class="row border-bottom pb-2">
                            <div class="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                class="img-fluid shadow-1-strong rounded"
                                alt="Skyscrapers"
                              />
                            </div>
                            <div class="col-9">
                              <p class="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
