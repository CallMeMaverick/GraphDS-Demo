export default function Footer() {
    return (
        <footer className={"bg-custom-footer text-white p-20 text-xl mt-20 flex flex-row justify-between"}>
            <div>
                <p>The project was developed and is maintained by Sviatoslav Kushnierov</p>
                <a className={"hover:text-sky-400 hover:underline hover:font-bold text-sky-300"}
                   href="https://portfoliowebsite-blush-eta.vercel.app" target={"_blank"}>Check out my portfolio
                    website</a>
                <hr className={"w-96 mt-6 mb-6"}/>
                <p>Feel free to reach out:</p>
                <p><strong>Phone (UA):</strong> <a
                    className={"hover:text-sky-400 hover:underline hover:font-bold text-sky-300"}
                    href="tel:+380974140303">+380 (97) 414 0303</a></p>
                <p><strong>Phone (PL):</strong> <a
                    className={"hover:text-sky-400 hover:underline hover:font-bold text-sky-300"}
                    href="tel:+48790301804">+48 790 301 804</a></p>
                <p><strong>Email:</strong> <a
                    className={"hover:text-sky-400 hover:underline hover:font-bold text-sky-300"}
                    href="mailto:ksvyat21@gmail.com">ksvyat21@gmail.com</a></p>
                <hr className={"w-96 mt-6 mb-6"}/>

                <div className={"flex flex-row gap-4 items-center"}>
                    <a href="https://github.com/CallMeMaverick" target={"_blank"}>
                        <svg className={"hover:fill-black"} fill="white" width="50px" height="50px" viewBox="0 0 32 32"
                             version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <title>github</title>
                            <path
                                d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path>
                        </svg>
                    </a>
                    <a href="www.linkedin.com/in/sviatoslav-kushnierov-53950726b" target={"_blank"}>
                        <svg className={"hover:fill-black"} fill="white" width="50px" height="50px" viewBox="0 0 32 32"
                             version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <title>linkedin</title>
                            <path
                                d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}