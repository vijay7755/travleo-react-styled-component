import React from 'react'
import styled from 'styled-components'

import homeImg from '../assets/hero.png'

const Section = styled.section`
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 100%;

    .background {
        height: 100%;
        img {
            width: 100%;
            filter: brightness(60%);
        }
    }

    .content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .title {
            color: white;
            h1 {
                font-size: 3rem;
                letter-spacing: 0.2rem;
            }
            p {
                padding: 0 20vw;
                margin-top: 0.4rem;
                font-size: 1.2rem;
            }
        }

        .search {
            display: flex;
            background-color: #ffffffce;
            padding: 0.5rem;
            border-radius: 0.5rem;

            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 1.5rem;
                label {
                    font-size: 1.1rem;
                    color: #03045e;
                }
                input {
                    background-color: transparent;
                    border: none;
                    text-align: center;
                    color: black;
                    &[type="date"] {
                        padding-left: 3rem;
                    }
                    &::placeholder {
                        color: black;
                    }
                    &:focus {
                        outline: none;
                    }
                }
            }

            button {
                padding: 1rem;
                cursor: pointer;
                border-radius: 0.3rem;
                border: none;
                color: white;
                background-color: #4361ee;
                font-size: 1.1rem;
                text-transform: uppercase;
                transition: 0.3s ease-in-out;
                &:hover{
                    background-color: #023e8a;
                }
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 980px) {
        height: 25rem;
        .background {
            img {
                height: 100%;
            }
        }
        .content {
            .title {
                h1 {
                    font-size: 1rem;
                }
                p {
                    font-size: 0.8rem;
                    padding: 1vw;
                }
            }
            .search {
                flex-direction: column;
                padding: 0.8rem;
                gap: 0.8rem;
                .container {
                    padding: 0 0.8rem;
                    input[type="date"] {
                        padding-left: 1rem;
                    }
                    button {
                        padding: 1rem;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`

const Hero = () => {
    return (
        <Section id="hero">
            <div className='background'>
                <img src={homeImg} alt='home' />
            </div>
            <div className='content'>
                <div className='title'>
                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                </div>
                <div className='search'>
                    <div className='container'>
                        <label htmlFor=''>Where you want to go</label>
                        <input type='text' placeholder='search your location'/>
                    </div>
                    <div className='container'>
                        <label htmlFor=''>Check-in</label>
                        <input type='date' />
                    </div>
                    <div className='container'>
                        <label htmlFor=''>Check-out</label>
                        <input type='date' />
                    </div>
                    <button>Explore Now</button>
                </div>
            </div>
        </Section>
    )
}

export default Hero
