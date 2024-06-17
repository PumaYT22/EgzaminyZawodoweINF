import React, { useState, useEffect } from 'react';
import { Pagination, Form, Table, Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';


const repoOwner = 'PumaYT22';
const repoName = 'EgzaminyZawodoweINF';


const obj={
    E14: {
        2014: {
            "e14_2014_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2014", month: "czerwiec"}],
            "e14_2014_wrzesien_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2014", month: "wrzesien"}]
        },
        2015: {
            "e14_2015_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2015", month: "czerwiec"}],
            "e14_2015_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2015", month: "styczen"}],
            "e14_2015_wrzesien_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2015", month: "wrzesien"}]
        },
        2016: {
            "e14_2016_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2016", month: "czerwiec"}],
            "e14_2016_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2016", month: "czerwiec"}],
            "e14_2016_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2016", month: "czerwiec"}],
            "e14_2016_pazdziernik_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2016", month: "pazdziernik"}],
            "e14_2016_pazdziernik_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2016", month: "pazdziernik"}],
            "e14_2016_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2016", month: "styczen"}],
            "e14_2016_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2016", month: "styczen"}]
        },
        2017: {
            "e14_2017_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2017", month: "czerwiec"}],
            "e14_2017_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2017", month: "czerwiec"}],
            "e14_2017_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2017", month: "czerwiec"}],
            "e14_2017_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2017", month: "czerwiec"}],
            "e14_2017_czerwiec_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2017", month: "czerwiec"}],
            "e14_2017_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2017", month: "styczen"}],
            "e14_2017_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2017", month: "styczen"}]
        },
        2018: {
            "e14_2018_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "czerwiec"}],
            "e14_2018_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "czerwiec"}],
            "e14_2018_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "czerwiec"}],
            "e14_2018_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "czerwiec"}],
            "e14_2018_czerwiec_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "czerwiec"}],
            "e14_2018_czerwiec_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "czerwiec"}],
            "e14_2018_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_7": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_8": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}],
            "e14_2018_styczen_9": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2018", month: "styczen"}]
        },
        2019: {
            "e14_2019_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "czerwiec"}],
            "e14_2019_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "czerwiec"}],
            "e14_2019_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "czerwiec"}],
            "e14_2019_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "czerwiec"}],
            "e14_2019_czerwiec_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "czerwiec"}],
            "e14_2019_czerwiec_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "czerwiec"}],
            "e14_2019_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_7": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_8": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}],
            "e14_2019_styczen_9": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2019", month: "styczen"}]
        },
        2020: {
            "e14_2020_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "e14_2020_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "e14_2020_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "e14_2020_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "e14_2020_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "styczen"}],
            "e14_2020_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "styczen"}],
            "e14_2020_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "styczen"}],
            "e14_2020_styczen_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "styczen"}]
        },
        2021: {
            "e14_2021_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "e14_2021_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "e14_2021_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "e14_2021_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "e14_2021_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "styczen"}]
        },
        2022: {
            "e14_2022_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "e14_2022_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "e14_2022_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "e14_2022_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}]
        },
        2023: {
            "e14_2023_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "e14_2023_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}]
        },
        2024: {
            "e14_2024_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}]
        }
    },
    EE09: {
        2020: {
            "ee9_2020_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "ee9_2020_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "ee9_2020_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "ee9_2020_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "ee9_2020_czerwiec_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "ee9_2020_czerwiec_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "czerwiec"}],
            "ee9_2020_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "styczen"}],
            "ee9_2020_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "styczen"}],
            "ee9_2020_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2020", month: "styczen"}]
        },
        2021: {
            "ee9_2021_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "ee9_2021_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "ee9_2021_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "ee9_2021_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}],
            "ee9_2021_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "styczen"}]
        },
        2022: {
            "ee9_2022_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "ee9_2022_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "ee9_2022_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "ee9_2022_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "ee9_2022_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "ee9_2022_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "ee9_2022_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "ee9_2022_styczen_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "ee9_2022_styczen_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "ee9_2022_styczen_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}],
            "ee9_2022_styczen_7": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}]
        },
        2023: {
            "ee9_2023_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "ee9_2023_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}],
            "ee9_2023_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}],
            "ee9_2023_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}],
            "ee9_2023_styczen_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}]
        },
        2024: {
            "ee9_2024_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "ee9_2024_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}]
        }
    },
    INF03: {
        2021: {
            "inf03_2021_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2021", month: "czerwiec"}]
        },
        2022: {
            "inf03_2022_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "inf03_2022_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "inf03_2022_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "czerwiec"}],
            "inf03_2022_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2022", month: "styczen"}]
        },
        2023: {
            "inf03_2023_czerwiec_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_10": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_11": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_12": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_7": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_8": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_czerwiec_9": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "czerwiec"}],
            "inf03_2023_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}],
            "inf03_2023_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}],
            "inf03_2023_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}],
            "inf03_2023_styczen_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}],
            "inf03_2023_styczen_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2023", month: "styczen"}]
        },
        2024: {
            "inf03_2024_styczen_1": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_10": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_11": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_12": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_2": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_3": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_4": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_5": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_6": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_7": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_8": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}],
            "inf03_2024_styczen_9": [{name: "usługi informatyczne", lang: "php", desc: "opis arkusza", year: "2024", month: "styczen"}]
        }
    }
}

console.log(obj)

const INFtrojka = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedQualification, setSelectedQualification] = useState('');
    const itemsPerPage = 5;

    useEffect(() => {
        // Zamień dane z obiektu obj na tablicę
        const exams = [];
        for (const qualification in obj) {
            for (const year in obj[qualification]) {
                for (const exam in obj[qualification][year]) {
                    exams.push({
                        ...obj[qualification][year][exam][0],
                        qualification,
                        examId: exam
                    });
                }
            }
        }
        setData(exams);
        setFilteredData(exams);
    }, []);

    useEffect(() => {
        // Filtrowanie danych
        const filtered = data.filter(item => {
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesYear = selectedYear ? item.year === selectedYear : true;
            const matchesQualification = selectedQualification ? item.qualification === selectedQualification : true;
            return matchesSearchTerm && matchesYear && matchesQualification;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedYear, selectedQualification, data]);

    // Oblicz ilość stron
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Wybierz elementy dla bieżącej strony
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Container>
            <h1 className="my-4">Lista arkuszy E14/EE09/INF03</h1>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Wyszukaj po name" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control 
                            as="select" 
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="">Wszystkie Lata</option>
                            {Array.from(new Set(data.map(item => item.year))).map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control 
                            as="select" 
                            value={selectedQualification}
                            onChange={(e) => setSelectedQualification(e.target.value)}
                        >
                            <option value="">Wszystkie Klasyfikacje</option>
                            {Array.from(new Set(data.map(item => item.qualification))).map((qualification, index) => (
                                <option key={index} value={qualification}>{qualification}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Row>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Qualification</th>
                        <th>Exam ID</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.lang}</td>
                            <td>{item.desc}</td>
                            <td>{item.year}</td>
                            <td>{item.month}</td>
                            <td>{item.qualification}</td>
                            <td>{item.examId}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                <Pagination.Prev onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} />
                {[...Array(totalPages).keys()].map(number => (
                    <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => setCurrentPage(number + 1)}>
                        {number + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)} />
            </Pagination>
        </Container>
    );
}

export default INFtrojka;
