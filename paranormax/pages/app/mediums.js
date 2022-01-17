import Image from "../../compenents/Design/Image";

const Profile = () => {
    return (
        <>
            <div className="content-wrapper">
                {/*greetings users*/}
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card corona-gradient-card">
                            <div className="card-body py-0 px-0 px-sm-3">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-7 col-xl-8 ml-4 p-2">
                                        <p className="mb-1 mb-sm-0">Welcome </p>
                                        <p className="mb-1 mb-sm-0">These are the Registered mediums</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Assigment page*/}
                <div className="row">
                    {/*{entries.map((entry) => (*/}
                        <div key='1' className="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <Image src="https://via.placeholder.com/1600x900" alt="..." className="img-fluid img-thumbnail" />
                                        <div className="col-12 mb-4">
                                            <div className=" row d-flex align-items-center align-self-start">
                                                <div className="col-9">
                                                    <h3 className="mb-0">name</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-9 mt-3">
                                            <p className="text-muted font-weight-normal">Bio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*))}*/}
                </div>
            </div>
        </>
    );
};

Profile.requiresAuth = true;
export default Profile;
