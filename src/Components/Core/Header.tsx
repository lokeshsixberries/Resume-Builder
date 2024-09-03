'use client';

import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarText } from 'reactstrap';
// import html2pdf from '../../../node_modules/html2pdf.js/dist/html2pdf';

const Header: React.FC = () => {

    const generatePDF = () => {
        const html2pdf = require('html2pdf.js');
        const element = document.querySelector('.resume-page');

        const options = {
            margin: 0.2,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: 'in',
                format: [8.27, 11.69], // A4 size
                orientation: 'portrait',
            }
        };

        if (element) {
            html2pdf().from(element).set(options).save();
        } else {
            console.error('Element with class "resume-page" not found.');
        }
    };

    return (
        <div>
            <Navbar expand className='bg-warning'>
                <Nav>
                    <NavbarBrand href="/">Resume Builder</NavbarBrand>
                </Nav>
                <NavbarText>
                    <button className='btn btn-success' onClick={generatePDF}>Download Resume</button>
                </NavbarText>
            </Navbar>
        </div>
    );
}

export default Header;
