import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { deleteContact, saveContact } from '../store/actions/actions';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import TextField from '../common/components/form/TextField';
import Button from '../common/components/form/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        width: '100%',
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    formFooter: {
        marginTop: theme.spacing(2),
    },
    formButton: {
        marginRight: theme.spacing(2),
    },
}));

function ContactForm({ contact, saveContact, deleteContact }) {
    const classes = useStyles();
    const history = useHistory();

    const onSubmit = async (contact) => {
        const { id } = await saveContact(contact);

        history.push(`/form/${id}`);
    };

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        } else if (values.name.length > 100) {
            errors.name = 'Name is too long';
        }

        if (isNaN(values.phone)) {
            errors.phone = 'Phone should be number';
        }

        return errors;
    };

    function validateName(value) {
        if (!value) {
            return 'Name is required';
        } else if (value.length > 100) {
            return 'Name is too long';
        }
    }

    const onDelete = async () => {
        await deleteContact(contact.id);

        history.push(`/form/new`);
    };

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.title}
                            component="h1"
                            variant="h4"
                            align="center"
                        >
                            Contact Form
                        </Typography>

                        <form
                            initialValues={contact}
                            onSubmit={onSubmit}
                            validate={validate}
                        >
                            <Form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="name"
                                            label="Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="surname"
                                            label="Surname"
                                            className="asdfadf"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="phone"
                                            label="Phone"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={3}
                                    className={classes.formFooter}
                                    justify="flex-end"
                                >
                                    <Grid item xs={12} md={6} align="right">
                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="secondary"
                                            className={classes.formButton}
                                            startIcon={<DeleteIcon />}
                                            onClick={onDelete}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className={classes.formButton}
                                            startIcon={<SaveIcon />}
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

const mapStateToProps = ({ contacts }, { match: { params } }) => {
    let contact = contacts.find((el) => el.id === params.id);

    contact = contact || {
        name: '',
        surname: '',
        phone: '',
    };

    return { contact };
};

const mapDispatchToProps = {
    saveContact,
    deleteContact,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ContactForm)
);