import React, { useState } from 'react'
import styled from "styled-components"
import Destination1 from "../assets/Destination1.png"
import Destination2 from "../assets/Destination2.png"
import Destination3 from "../assets/Destination3.png"
import Destination4 from "../assets/Destination4.png"
import Destination5 from "../assets/Destination5.png"
import Destination6 from "../assets/Destination6.png"
import info1 from "../assets/info1.png"
import info2 from "../assets/info2.png"
import info3 from "../assets/info3.png"


const Section = styled.section`
    padding: 2rem 0;
    .title {
        text-align: center;
    }
    .packages {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        ul {
            display: flex;
            list-style-type: none;
            width: max-content;
            li {
                cursor: pointer;
                padding: 1rem 2rem;
                border-bottom: 0.1rem solid black;
            }
            .active {
                border-bottom: 0.5rem solid #8338ec;
            }
        }
    }
    .destinations {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 3rem;
        gap: 3rem;
        .destination {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            background-color: #8338ec14;
            border-radius: 1rem;
            transition: 0.3s ease-in-out;
            &:hover {
                transform: translateX(0.4rem) translateY(-1rem);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
            img {
                width: 100%;
            }
            .info {
                display: flex;
                align-items: center;
                .services {
                    display: flex;
                    gap: 0.3rem;
                    img {
                        width: 2rem;
                        border-radius: 1rem;
                        background-color: #4d2ddb84;
                        padding: 0.2rem 0.4rem;
                    }
                }
                display: flex;
                justify-content: space-between;
            }
            .distance {
                display: flex;
                justify-content: space-between;
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 768px) {
        .packages {
            ul {
                li {
                    padding: 0.5rem;
                    font-size: 2vw;
                }
                .active {
                    border-bottom-width: 0.3rem;
                }
            }
        }

        .destinations {
            grid-template-columns: 1fr;
            padding: 0;
        }
    }
`

const Recommend = () => {
    const data = [
        {
            image: Destination1,
            title: "Singapore",
            subTitle: "Singapore, officialy thr Republic of Singapore, is a",
            cost: "38,800",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination2,
            title: "Thailand",
            subTitle: "Thailand is a Southeast Asia country. It's known for",
            cost: "54,200",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination3,
            title: "Paris",
            subTitle: "Paris, France's capital, is a major European city and a",
            cost: "45,500",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination4,
            title: "New Zealand",
            subTitle: "New Zealand is an island country in the",
            cost: "24,100",
            duration: "Approx 1 night trip",
        },
        {
            image: Destination5,
            title: "Bora Bora",
            subTitle: "Bora Bora is a small South Pacific island northwest of",
            cost: "95,400",
            duration: "Approx 2 night 2 day trip",
        },
        {
            image: Destination6,
            title: "London",
            subTitle: "London, the capital of England and the United",
            cost: "38,800",
            duration: "Approx 3 night 2 day trip",
        },
    ]

    const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
    ]

    const [active, setActive] = useState(1)

    return (
        <Section id="recommend">
            <div className='title'>
                <h2>Recommend Destinations</h2>
            </div>
            <div className='packages'>
                <ul>
                    {packages.map((pkg, index) => {
                        return (
                            <li
                                key={index}
                                className={active === index + 1 ? 'active' : null}
                                onClick={() => setActive(index + 1)}>
                                {pkg}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className='destinations'>
                {
                    data.map(destination => {
                        return (
                            <div className='destination' key={destination.title}>
                                <img src={destination.image} alt='destination' />
                                <h3>{destination.title}</h3>
                                <p>{destination.subTitle}</p>
                                <div className='info'>
                                    <div className='services'>
                                        <img src={info1} alt='services' />
                                        <img src={info2} alt='services' />
                                        <img src={info3} alt='services' />
                                    </div>
                                    <h4>{destination.cost}</h4>
                                </div>
                                <div className="distance">
                                    <span>1000 Kms</span>
                                    <span>{destination.duration}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}

export default Recommend