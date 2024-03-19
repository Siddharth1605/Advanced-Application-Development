import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import './Appoinment.css';

const Appoinment = () => {
    return (
        <section className="appoinment-wrapper">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="section-title">
                            <h1 className="mt-5 font-bold text-4xl" style={{color:'#FF204E'}}>Any Inquiry?</h1>
                        </div>
                        <div className="appoinment-form" style={{color:'red' }}>
                            <form action="#" className="row">
                                <Grid item xs={12} sm={6} style={{minHeight:'10px' }}>
                                    <TextField color='primary' fullWidth label="Name" variant="outlined" style={{ marginBottom: '10px', padding:'10px' , color:'red'}} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Email" variant="outlined" style={{ marginBottom: '10px', padding:'10px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Phone" variant="outlined" style={{ marginBottom: '10px', padding:'10px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Subject" variant="outlined" style={{ marginBottom: '10px', padding:'10px' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        multiline
                                        rows={2}
                                        style={{ marginBottom: '10px', padding:'10px' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" style={{backgroundColor:'#FF204E'}} className="theme-btn btn-fill form-btn mt-5 pl-10" >
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Appoinment;
