import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="border-t border-t-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-[#037cb0] font-bold text-3xl navbar">
                Work <span className="text-[#5ec2e0]">Waves</span>
              </h1>
              <p className="text-sm">© WorkWaves. All rights reserved.</p>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com/Muhammad-Haram" className="hover:text-gray-400" aria-label="Github">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#037cb0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.165 11.4.6.112.82-.261.82-.578v-2.022c-3.338.726-4.043-1.6-4.043-1.6-.545-1.384-1.333-1.75-1.333-1.75-1.087-.743.083-.728.083-.728 1.204.085 1.836 1.24 1.836 1.24 1.072 1.836 2.812 1.307 3.496.999.108-.774.42-1.307.765-1.607-2.666-.306-5.467-1.333-5.467-5.931 0-1.31.467-2.38 1.236-3.22-.123-.304-.535-1.525.117-3.175 0 0 1.009-.323 3.306 1.23.957-.267 1.982-.399 3.003-.405 1.021.006 2.047.138 3.004.405 2.295-1.553 3.303-1.23 3.303-1.23.652 1.65.24 2.871.118 3.175.77.84 1.237 1.91 1.237 3.22 0 4.612-2.807 5.623-5.476 5.925.43.373.815 1.1.815 2.221v3.289c0 .322.219.692.825.575C20.562 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0z" fill="#037cb0" />
                </svg>  

              </a>
              <a href="" className="hover:text-gray-400" aria-label="Twitter">
                <svg className="w-6 h-6" fill="#037cb0" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-haram-h0057005/" className="hover:text-gray-400" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="#037cb0" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer