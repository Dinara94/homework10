import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from "@material-ui/core/Input";
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { deleteContact, saveContact } from '../store/actions/actions';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

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
    const [editContact, setEditContact] = useState(contact);

    useEffect(() => {
        setEditContact(contact);
    }, [contact.id]);

    const onChange = ({ target }) => {
        setEditContact({ ...editContact, [target.name]: [target.value]});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { id } = await saveContact(editContact);

        history.push(`/form/${id}`);
    };

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
                            /* initialValues={contact} */
                            onSubmit={onSubmit}
                        >
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <Input
                                            name="name"
                                            label="Name"
                                            onChange={onChange}
                                            value={editContact.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Input
                                            name="surname"
                                            label="Surname"
                                            className="asdfadf"
                                            onChange={onChange}
                                            value={editContact.surname}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Input
                                            name="phone"
                                            label="Phone"
                                            onChange={onChange}
                                            value={editContact.phone}
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