import React from "react";
import {Text,Image,Badge} from '@chakra-ui/react'
const RightSideBar = () =>{


return <div className="container">
    
        <div className="row">
            <Text fontSize='3xl' as='b' align='left'>Upcoming Streaming</Text>
        </div>
        <div className="row">
            <div className="card my-2 py-3" >
                <div className="row py-3 mx-2 border-bottom">
                      <div className="col-sm-5 d-flex">
                    <Image boxSize='150px' src="https://asset.kompas.com/crops/ZgMYQpoMDjab6XTYWgt_Krmc2XM=/84x6:665x393/750x500/data/photo/2022/08/18/62fdb88791a46.jpg"></Image>
                    </div>
                    <div className="col-sm-6 py-3">
                        <div className="row justify-content-between">
                        <div className="col-6 text-start"><label className="text-muted ">Aug 18, 2022</label></div>
                        <div className="col-6 text-start"><label className="text-muted">15 min read</label></div>
                        </div>
                        <div className="row "><div className="col-11 fw-bold text-start">Banjir Medan Hari Ini: Sejumlah Daerah Terendam, Kemacetan Parah di Simpang pos</div> </div>
                    </div>   
                </div>

                <div className="row py-3 mx-2 border-bottom">
                      <div className="col-sm-5 d-flex">
                    <Image boxSize='150px' src="https://parboaboa.com/data/foto_berita/eks_wali_kota_cimahi_tangkap_lagi_kpk.webp"></Image>
                    </div>
                    <div className="col-sm-6 py-3">
                        <div className="row justify-content-between">
                        <div className="col-6 text-start"><label className="text-muted">Aug 18, 2022</label></div>
                        <div className="col-6 text-start"><label className="text-muted">10 min read</label></div>
                        </div>
                        <div className="row"><div className="col-12 text-start fw-bold">Baru Bebas dari Lapas Sukamiskin, Eks Wali Kota Cimahi Kembali Ditangkap KPK</div> </div>
                    </div>
                </div>

                <div className="row py-3 mx-2 border-bottom">
                      <div className="col-sm-5 d-flex">
                    <Image boxSize='150px' src="https://parboaboa.com/data/foto_berita/timsus_kemagelang_komnasham.webp"></Image>
                    </div>
                    <div className="col-sm-6 py-3">
                        <div className="row justify-content-between">
                        <div className="col-6 text-start"><label className="text-muted">Aug 18, 2022</label></div>
                        <div className="col-6 text-start"><label className="text-muted">5 min read</label></div>
                        </div>
                        <div className="row"><div className="col-12 text-start fw-bold">Kasus Brigadir J, Timsus Kapolri Ke Magelang dan Komnas HAM ke Rumah Ferdy Sambo Hari Ini</div> </div>
                    </div>
                </div>
                <div className="row py-3 mx-2 ">
                      <div className="col-sm-5 d-flex">
                    <Image boxSize='150px' src="https://parboaboa.com/data/foto_berita/sur_bur.webp"></Image>
                    </div>
                    <div className="col-sm-6 py-3">
                        <div className="row justify-content-between">
                        <div className="col-6 text-start"><label className="text-muted">Aug 18, 2022</label></div>
                        <div className="col-6 text-start"><label className="text-muted">5 min read</label></div>
                        </div>
                        <div className="row"><div className="col-12 text-start fw-bold">Kejagung Bakal Buru Aset Surya Darmadi di Luar Negri</div> </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="card border border-2">
                <div className="row py-2 mx-2">
                    <div className="fw-bold text-start">Upcoming Programs</div>
                    <div className="text-muted text-start">Based on your watchlist</div>
                </div>
                <div className="row py-3 mx-2 border-bottom">
                    <div className="col-sm-2"><Badge borderRadius='base' px='3' py='2' colorScheme='linkedin'>JAN<br/>10</Badge></div>
                    <div className="col-sm-6">
                        <div className="text-muted fs-5 text-start">Trade war in 2022</div>
                        <div className="text-muted fs-6 text-start">Sept 02, 2002, 5:30 AM</div>
                    </div>
                    <div className="col-sm-2 p-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"/></svg></div>
                </div>
                <div className="row py-3 mx-2 border-bottom">
                    <div className="col-sm-2"><Badge borderRadius='base' px='3' py='2' colorScheme='linkedin'>JAN<br/>10</Badge></div>
                    <div className="col-sm-6">
                        <div className="text-muted fs-5 text-start">Trade war in 2022</div>
                        <div className="text-muted fs-6 text-start">Sept 02, 2002, 5:30 AM</div>
                    </div>
                    <div className="col-sm-2 p-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"/></svg></div>
                </div>
                <div className="row py-3 mx-2 border-bottom">
                    <div className="col-sm-2"><Badge borderRadius='base' px='3' py='2' colorScheme='linkedin'>JAN<br/>10</Badge></div>
                    <div className="col-sm-6">
                        <div className="text-muted fs-5 text-start">Trade war in 2022</div>
                        <div className="text-muted fs-6 text-start">Sept 02, 2002, 5:30 AM</div>
                    </div>
                    <div className="col-sm-2 p-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"/></svg></div>
                </div>
                <div className="row py-3 mx-2 border-bottom">
                    <div className="col-sm-2"><Badge borderRadius='base' px='3' py='2' colorScheme='linkedin'>JAN<br/>10</Badge></div>
                    <div className="col-sm-6">
                        <div className="text-muted fs-5 text-start">Trade war in 2022</div>
                        <div className="text-muted fs-6 text-start">Sept 02, 2002, 5:30 AM</div>
                    </div>
                    <div className="col-sm-2 p-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"/></svg></div>
                </div>
                <div className="row py-3 mx-2 border-bottom">
                    <div className="col-sm-2"><Badge borderRadius='base' px='3' py='2' colorScheme='linkedin'>JAN<br/>10</Badge></div>
                    <div className="col-sm-6">
                        <div className="text-muted fs-5 text-start">Trade war in 2022</div>
                        <div className="text-muted fs-6 text-start">Sept 02, 2002, 5:30 AM</div>
                    </div>
                    <div className="col-sm-2 p-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"/></svg></div>
                </div>
                <div className="row py-3 mx-2">
                    <div className="col-sm-2"><Badge borderRadius='base' px='3' py='2' colorScheme='linkedin'>JAN<br/>10</Badge></div>
                    <div className="col-sm-6">
                        <div className="text-muted fs-5 text-start">Trade war in 2022</div>
                        <div className="text-muted fs-6 text-start">Sept 02, 2002, 5:30 AM</div>
                    </div>
                    <div className="col-sm-2 p-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"/></svg></div>
                </div>
            </div>
    </div>

}

export default RightSideBar;