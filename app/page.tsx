"use client";

import React, { useState } from 'react';
import { BookOpen, Heart, Mountain } from 'lucide-react';

export default function JesusSermon() {
    const [activeSection, setActiveSection] = useState('beatitudes');
    const [expandedBeatitude, setExpandedBeatitude] = useState<number | null>(null);


    const sections = {
        beatitudes: {
            title: 'The Beatitudes',
            icon: Heart,
            content: [
                { verse: 'Blessed are the poor in spirit', meaning: 'for theirs is the kingdom of heaven.' },
                { verse: 'Blessed are those who mourn', meaning: 'for they will be comforted.' },
                { verse: 'Blessed are the meek', meaning: 'for they will inherit the earth.' },
                { verse: 'Blessed are those who hunger and thirst for righteousness', meaning: 'for they will be filled.' },
                { verse: 'Blessed are the merciful', meaning: 'for they will be shown mercy.' },
                { verse: 'Blessed are the pure in heart', meaning: 'for they will see God.' },
                { verse: 'Blessed are the peacemakers', meaning: 'for they will be called children of God.' },
                { verse: 'Blessed are those who are persecuted because of righteousness', meaning: 'for theirs is the kingdom of heaven.' }
            ]
        },
        teachings: {
            title: 'Core Teachings',
            icon: BookOpen,
            content: [
                {
                    title: 'Salt and Light',
                    text: 'You are the salt of the earth... You are the light of the world. A town built on a hill cannot be hidden.'
                },
                {
                    title: 'Love Your Enemies',
                    text: 'But I tell you, love your enemies and pray for those who persecute you, that you may be children of your Father in heaven.'
                },
                {
                    title: 'Do Not Judge',
                    text: 'Do not judge, or you too will be judged. For in the same way you judge others, you will be judged.'
                },
                {
                    title: 'Ask, Seek, Knock',
                    text: 'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.'
                },
                {
                    title: 'The Golden Rule',
                    text: 'So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.'
                }
            ]
        },
        prayer: {
            title: "The Lord's Prayer",
            icon: Mountain,
            content: {
                text: `Our Father in heaven,
hallowed be your name,
your kingdom come,
your will be done,
on earth as it is in heaven.
Give us today our daily bread.
And forgive us our debts,
as we also have forgiven our debtors.
And lead us not into temptation,
but deliver us from the evil one.`
            }
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1a1611 0%, #2d2419 50%, #1a1611 100%)',
            color: '#f5e6d3',
            fontFamily: '"Crimson Pro", "Georgia", serif',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'fixed',
                top: '-10%',
                right: '-5%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'fixed',
                bottom: '-10%',
                left: '-5%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(139, 115, 85, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />

            {/* Header */}
            <header style={{
                textAlign: 'center',
                padding: '4rem 2rem 3rem',
                position: 'relative',
                borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
            }}>
                <div style={{
                    display: 'inline-block',
                    marginBottom: '1.5rem',
                    animation: 'fadeInDown 1s ease-out'
                }}>
                    <Mountain size={48} strokeWidth={1.5} style={{ color: '#d4af37' }} />
                </div>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: '300',
                    margin: '0 0 0.5rem',
                    letterSpacing: '0.02em',
                    lineHeight: '1.1',
                    animation: 'fadeInUp 1s ease-out 0.2s backwards',
                    fontFamily: '"Playfair Display", serif'
                }}>
                    The Sermon on the Mount
                </h1>
                <p style={{
                    fontSize: '1.1rem',
                    opacity: 0.7,
                    fontStyle: 'italic',
                    letterSpacing: '0.05em',
                    animation: 'fadeInUp 1s ease-out 0.4s backwards'
                }}>
                    Matthew 5-7
                </p>
            </header>

            {/* Navigation */}
            <nav style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                padding: '2rem',
                flexWrap: 'wrap'
            }}>
                {Object.entries(sections).map(([key, section], index) => {
                    const Icon = section.icon;
                    return (
                        <button
                            key={key}
                            onClick={() => setActiveSection(key)}
                            style={{
                                padding: '1rem 2rem',
                                background: activeSection === key
                                    ? 'rgba(212, 175, 55, 0.15)'
                                    : 'rgba(245, 230, 211, 0.03)',
                                border: activeSection === key
                                    ? '1px solid rgba(212, 175, 55, 0.4)'
                                    : '1px solid rgba(245, 230, 211, 0.1)',
                                color: activeSection === key ? '#d4af37' : '#f5e6d3',
                                borderRadius: '0',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontFamily: 'inherit',
                                letterSpacing: '0.05em',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s backwards`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                if (activeSection !== key) {
                                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeSection !== key) {
                                    e.currentTarget.style.background = 'rgba(245, 230, 211, 0.03)';
                                    e.currentTarget.style.borderColor = 'rgba(245, 230, 211, 0.1)';
                                }
                            }}
                        >
                            <Icon size={18} strokeWidth={1.5} />
                            {section.title}
                        </button>
                    );
                })}
            </nav>

            {/* Content */}
            <main style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '3rem 2rem 5rem',
                animation: 'fadeIn 0.8s ease-out'
            }}>
                {activeSection === 'beatitudes' && (
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '300',
                            marginBottom: '3rem',
                            textAlign: 'center',
                            letterSpacing: '0.02em',
                            fontFamily: '"Playfair Display", serif'
                        }}>
                            The Beatitudes
                        </h2>
                        <div style={{
                            display: 'grid',
                            gap: '1.5rem'
                        }}>
                            {sections.beatitudes.content.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setExpandedBeatitude(expandedBeatitude === index ? null : index)}
                                    style={{
                                        padding: '2rem',
                                        background: expandedBeatitude === index
                                            ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.06) 100%)'
                                            : 'rgba(245, 230, 211, 0.03)',
                                        border: '1px solid',
                                        borderColor: expandedBeatitude === index
                                            ? 'rgba(212, 175, 55, 0.3)'
                                            : 'rgba(245, 230, 211, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        animation: `slideInLeft 0.6s ease-out ${index * 0.1}s backwards`,
                                        position: 'relative'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (expandedBeatitude !== index) {
                                            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                            e.currentTarget.style.background = 'rgba(212, 175, 55, 0.06)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (expandedBeatitude !== index) {
                                            e.currentTarget.style.borderColor = 'rgba(245, 230, 211, 0.1)';
                                            e.currentTarget.style.background = 'rgba(245, 230, 211, 0.03)';
                                        }
                                    }}
                                >
                                    <div style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '400',
                                        marginBottom: expandedBeatitude === index ? '1rem' : '0',
                                        transition: 'margin 0.4s ease',
                                        letterSpacing: '0.01em'
                                    }}>
                                        {item.verse}
                                    </div>
                                    <div style={{
                                        fontSize: '1.1rem',
                                        opacity: expandedBeatitude === index ? 1 : 0,
                                        maxHeight: expandedBeatitude === index ? '100px' : '0',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease',
                                        fontStyle: 'italic',
                                        color: '#d4af37'
                                    }}>
                                        {item.meaning}
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        top: '2rem',
                                        right: '2rem',
                                        fontSize: '3rem',
                                        opacity: 0.1,
                                        fontWeight: '300',
                                        fontFamily: '"Playfair Display", serif'
                                    }}>
                                        {index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeSection === 'teachings' && (
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '300',
                            marginBottom: '3rem',
                            textAlign: 'center',
                            letterSpacing: '0.02em',
                            fontFamily: '"Playfair Display", serif'
                        }}>
                            Core Teachings
                        </h2>
                        <div style={{
                            display: 'grid',
                            gap: '2.5rem'
                        }}>
                            {sections.teachings.content.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: '2.5rem',
                                        background: 'linear-gradient(135deg, rgba(245, 230, 211, 0.04) 0%, rgba(212, 175, 55, 0.02) 100%)',
                                        border: '1px solid rgba(212, 175, 55, 0.15)',
                                        borderLeft: '4px solid rgba(212, 175, 55, 0.4)',
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        fontWeight: '400',
                                        marginBottom: '1rem',
                                        color: '#d4af37',
                                        letterSpacing: '0.02em',
                                        fontFamily: '"Playfair Display", serif'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        margin: 0,
                                        opacity: 0.9,
                                        letterSpacing: '0.01em'
                                    }}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeSection === 'prayer' && (
                    <div style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '300',
                            marginBottom: '3rem',
                            letterSpacing: '0.02em',
                            fontFamily: '"Playfair Display", serif',
                            animation: 'fadeInDown 0.8s ease-out'
                        }}>
                            The Lord's Prayer
                        </h2>
                        <div style={{
                            padding: '3rem',
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.03) 100%)',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            position: 'relative',
                            animation: 'scaleIn 1s ease-out 0.3s backwards'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                left: '1.5rem',
                                fontSize: '4rem',
                                opacity: 0.1,
                                fontFamily: '"Playfair Display", serif'
                            }}>"</div>
                            <pre style={{
                                fontFamily: 'inherit',
                                fontSize: '1.3rem',
                                lineHeight: '2',
                                margin: 0,
                                whiteSpace: 'pre-wrap',
                                letterSpacing: '0.01em',
                                opacity: 0.95
                            }}>
                {sections.prayer.content.text}
              </pre>
                            <div style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                right: '1.5rem',
                                fontSize: '4rem',
                                opacity: 0.1,
                                fontFamily: '"Playfair Display", serif'
                            }}>"</div>
                        </div>
                    </div>
                )}
            </main>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600&family=Crimson+Pro:wght@300;400;600&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
        </div>
    );
}
