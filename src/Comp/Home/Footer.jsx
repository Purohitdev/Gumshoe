import React from 'react'
import gsap from 'gsap';


function Footer() {
  return (
    <div className='footer'>
      <div className="foot1">
        <p> gumshoe  brings a pioneering philosophy to storytelling across film, television, games and emerging platforms.</p>

      </div>
      <div className="foot2">
        <div className="ft1">

          <div className="ft-top try">
            <h1>Follow us</h1>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
          </div>
          {/* <hr /> */}
          <div className="ft-top try">
            <h1>Join us</h1>
            <li>Careers</li>
          </div>
        </div>
        <div className="ft1">
          <div className="ft-top">
            <h1>Newsletter</h1>


            <div class="messageBox">
              <div class="fileUploadWrapper">
                <label for="file">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                    <circle
                      stroke-width="20"
                      stroke="#6c6c6c"
                      fill="none"
                      r="158.5"
                      cy="168.5"
                      cx="168.5"
                    ></circle>
                    <path
                      stroke-linecap="round"
                      stroke-width="25"
                      stroke="#6c6c6c"
                      d="M167.759 79V259"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-width="25"
                      stroke="#6c6c6c"
                      d="M79 167.138H259"
                    ></path>
                  </svg>
                  <span class="tooltip">Add an image</span>
                </label>
                <input type="file" id="file" name="file" />
              </div>
              <input required="" placeholder="Message..." type="text" id="messageInput" />
              <button id="sendButton">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                  <path
                    fill="none"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="33.67"
                    stroke="#6c6c6c"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                </svg>
              </button>
            </div>


          </div>
          {/* <hr /> */}
          <div className="ft-top">
            <h1>Copyright</h1>
            <li>©Impic.Dev 2023  Studios</li>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer