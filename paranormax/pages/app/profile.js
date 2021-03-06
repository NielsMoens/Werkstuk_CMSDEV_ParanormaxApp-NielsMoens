import {getUser} from "../../compenents/core/storage";


// get the user data from the current user form the localStorage to display on there profile page

const Profile = () => {

    const {user} = getUser();
    const userD = user;

    return (
        <>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                            alt="Avatar"
                                            className="img-fluid my-5 w-50 "
                                        />
                                        <h5> </h5>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>firstname</h6>
                                                    <p className="text-muted">{userD.firstName}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>lastname</h6>
                                                    <p className="text-muted">{userD.lastName}</p>
                                                </div> <div className="col-6 mb-3">
                                                    <h6>email</h6>
                                                    <p className="text-muted">{userD.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Profile.requiresAuth = true;
export default Profile;
