import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import styles from './../styles/Filters.module.css';
import { useState } from 'react';

const extractSourcesDate = (data) => {
    let sources = [];
    data.forEach((item) => {
        if (sources.includes(item.source)) return;
        sources.push(item.source);
    })
    return sources;
}

const Filters = ({ data, selectedSources, setSelectedSources }) => {
    const [showSources, setShowSources] = useState(false);
    const toggleSources = () => setShowSources(prev => !prev);

    const [showAuthors, setShowAuthors] = useState(false);
    const toggleAuthors = () => setShowAuthors(prev => !prev);

    const [showPublishedDate, setShowPublishedDate] = useState(false);
    const togglePublishedDate = () => setShowPublishedDate(prev => !prev);

    const [showTopic, setShowTopic] = useState(false);
    const toggleTopic = () => setShowTopic(prev => !prev);

    const [showType, setShowType] = useState(false);
    const toggleType = () => setShowType(prev => !prev);

    const extractedSources = extractSourcesDate(data);

    return (
        <>
            <h2 className={styles['filter-heading']}>
                Filters
            </h2>
            <div className={styles['filter-main']}>
                <div className={styles['filter-source']} onClick={toggleSources}>
                    <h3 className={styles['filter-source-heading']}>Source</h3>
                    <div className={styles['filter-source-dropdown']}>
                        {showSources ? <AiOutlineDown /> : <AiOutlineRight />}
                    </div>
                </div>
                {
                    showSources ?
                        <div className={styles['filter-source-dropdown-content']}>
                            {
                                extractedSources.map((source, idx) => {
                                    return (
                                        <div key={idx} className={styles['filter-source-dropdown-item']} >
                                            <input type='checkbox' className={styles['filter-source-dropdown-item-checkbox']}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedSources(prev => [...prev, source]);
                                                    } else {
                                                        setSelectedSources(prev => prev.filter(item => item !== source));
                                                    }
                                                }}
                                                defaultChecked={selectedSources.includes(source)}
                                            />
                                            <div className={styles['filter-source-dropdown-item-text']}>
                                                {source}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : ''
                }
            </div>
            <div className={styles['filter-author']} onClick={toggleAuthors}>
                <h3 className={styles['filter-author-heading']}>Auhtors</h3>
                <div className={styles['filter-author-dropdown']}>
                    {showAuthors ? <AiOutlineDown /> : <AiOutlineRight />}
                </div>
            </div>
            <div className={styles['filter-published-date']} onClick={togglePublishedDate}>
                <h3 className={styles['filter-published-date-heading']}>Published Date</h3>
                <div className={styles['filter-published-date-dropdown']}>
                    {showPublishedDate ? <AiOutlineDown /> : <AiOutlineRight />}
                </div>
            </div>
            <div className={styles['filter-topic']} onClick={toggleTopic}>
                <h3 className={styles['filter-topic-heading']}>Topics</h3>
                <div className={styles['filter-topic-dropdown']}>
                    {showTopic ? <AiOutlineDown /> : <AiOutlineRight />}
                </div>
            </div>
            <div className={styles['filter-type']} onClick={toggleType}>
                <h3 className={styles['filter-type-heading']}>Type</h3>
                <div className={styles['filter-type-dropdown']}>
                    {showType ? <AiOutlineDown /> : <AiOutlineRight />}
                </div>
            </div>
        </>
    )
}

export default Filters