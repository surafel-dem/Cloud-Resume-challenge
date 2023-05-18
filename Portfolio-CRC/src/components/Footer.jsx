import React from "react";

function Footer(){
    return (
        <div className="py-5 text-center">
            {/* social Icons*/}
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Surafel....template by {' '}
            <a
               href="https://github.com/ForrestKnight/minimal-portfolio"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-blue-600"
               rel="noreferrer noopener"
            >
               ForrestKnight
            </a>{' '}.
            </p>
        </div>
    )
}

export default Footer;