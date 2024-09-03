'use client';

import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText,
} from 'reactstrap';

import * as html2pdf from 'html2pdf.js';

const Header: React.FC = () => {

    const generatePDF = () => {
        const element = document.querySelector('.resume-page');

        const opt = {
            margin: .2,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: 'in',
                format: [8.27, 11.69],
                orientation: 'portrait',
            }
        };

        if (element) {
            html2pdf().from(element).set(opt).save();
        } else {
            console.error('Element with class "resume-page" not found.');
        }
    };

    return (
        <>
            <div>
                <Navbar expand className='bg-warning'>
                    <Nav>
                        <NavbarBrand href="/">Rsume Builder</NavbarBrand>
                    </Nav>
                    <NavbarText>
                        <button className='btn btn-success' onClick={generatePDF}>Download Resume</button>
                    </NavbarText>
                </Navbar>
            </div>
        </>
    );
}

export default Header;
