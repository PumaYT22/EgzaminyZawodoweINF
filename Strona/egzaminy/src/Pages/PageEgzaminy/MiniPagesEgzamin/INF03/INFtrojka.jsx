import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import axios from 'axios';


const repoOwner = 'PumaYT22';
const repoName = 'EgzaminyZawodoweINF';


const obj={
    E14:{

    },
    EE09:{

    },
    INF03:{
        2021:{
            
        },
        2022:{

        },
        2023:{

        },
        2024:{
            "inf03_2024_styczen_1":[{name:"usługi informatyczne",lang:"php",desc:"opis arkusza",year:"2024",month:"styczen"}]
        },
    }
}

console.log(obj)

const INFtrojka = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [examData, setExamData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('INF03');
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchAllExamFolders = async () => {
         
            try {
                const years = ['2014','2015','2016','2017','2018','2019','2020','2021', '2022', '2023', '2024'];
                const allExamFolders = [];

                for (const year of years) {
                    // try{
                    //     const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/Egzaminy/${selectedCategory}/${year}`);
                    
                    // if (!response.data || response.data.length === 0) {
                    //     console.error(`Brak danych dla roku ${year}`);
                    //     break; // Zatrzymanie pętli, jeśli odpowiedź jest pusta
                    // }
                    
                    // const folders = response.data;

                    // // Przetwarzanie każdego folderu INF03/{rok}
                    // for (const folder of folders) {
                    //     if (folder.type === 'dir') {
                    //         const folderName = folder.name;
                    //         const parts = folderName.split('_');
                    //         const month = parts[2];
                    //         const sheetNumber = parts[3];

                    //         allExamFolders.push({
                    //             name: folderName,
                    //             year,
                    //             month,
                    //             sheetNumber,
                    //         });
                    //     }
                    // }
                    // }catch(error){
                    //     console.error('Error:', error);
                    // }
                    
                }

                setExamData(allExamFolders);
            } catch (error) {
                console.error('Error fetching exam folders:', error);
            }
        };

        fetchAllExamFolders();
    }, [selectedCategory]);

    // Filtracja wyników na podstawie wyszukiwania
    const filteredExams = examData.filter(exam =>
        exam.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Obliczanie indeksów początkowego i końcowego wyniku na aktualnej stronie
    const indexOfLastExam = currentPage * itemsPerPage;
    const indexOfFirstExam = indexOfLastExam - itemsPerPage;
    const currentExams = filteredExams.slice(indexOfFirstExam, indexOfLastExam);

    // Obsługa zmiany strony
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Obsługa zmiany kategorii
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className='d-flex justify-content-center text-center' style={{ minHeight: "80vh" }}>
          <div className="container py-5">
                <div className="mb-3">
                    <label htmlFor="searchInput" className="form-label">Wyszukaj arkusz INF03</label>
                    <input
                        type="text"
                        id="searchInput"
                        className="form-control"
                        placeholder="Wpisz nazwę arkusza..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="categorySelect" className="form-label">Wybierz kategorię:</label>
                    <select
                        id="categorySelect"
                        className="form-select"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="INF03">INF03</option>
                        <option value="EE09">EE09</option>
                        <option value="E14">E14</option>
                    </select>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Nazwa folderu</th>
                                <th>Rok</th>
                                <th>Miesiąc</th>
                                <th>Numer arkusza</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentExams.map((exam, index) => (
                                <tr key={index}>
                                    <td>{exam.name}</td>
                                    <td>{exam.year}</td>
                                    <td>{exam.month}</td>
                                    <td>{exam.sheetNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination className="mt-4">
                    {Array.from({ length: Math.ceil(filteredExams.length / itemsPerPage) }, (_, index) => (
                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </div>
    );
}

export default INFtrojka;
