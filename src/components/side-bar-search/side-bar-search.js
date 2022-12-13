function SideBarSearch() {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div id="cssmenu">
          <ul>
            <li className="has-sub">
              <a href="#">CATEGORY </a>
              <ul>
                <li>
                  <a href="#">Smart Phones</a>
                </li>
                <li>
                  <a href="#">Cell Phones</a>
                </li>
                <li className="last">
                  <a href="#">Android Phones</a>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <a href="#">Brand(07)</a>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">Alcatel</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">Apple</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">Google</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">HTC</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">Samsung</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">Vivo</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">Nexus</span>
                  </label>
                </li>
              </ul>
            </li>

            <li className="has-sub">
              <a href="#">Price</a>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">500-1000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">1000-2000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">2000-5000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">5000-10000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">10000-18000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">1800-20000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">20000-25000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span className="checkbox-list">Above-25000</span>
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBarSearch;
