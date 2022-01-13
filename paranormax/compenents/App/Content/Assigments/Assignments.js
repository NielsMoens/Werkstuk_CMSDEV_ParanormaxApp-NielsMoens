import {useQuery} from "@apollo/client";
import GET_ASSIGNMENTS from "../../../../lib/Queries/getAssigments";

const Assignments = () => {
    const AssQuery = useQuery(GET_ASSIGNMENTS);
    const { data, loading, error } = AssQuery;

    const { entries } = data;
    console.log(entries)
    return (
        <>
            <div className="content-wrapper">
                {/*greetings users*/}
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card corona-gradient-card">
                            <div className="card-body py-0 px-0 px-sm-3">
                                <div className="row align-items-center">
                                    <div className="col-5 col-sm-7 col-xl-8 ml-4 p-2">
                                        <p className="mb-1 mb-sm-0">Welcome back user</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Assigment page*/}
                <div className="row">
                    {entries.map((entry)=>(
                        <div key={entry.id} className="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <div className=" row d-flex align-items-center align-self-start">
                                                <div className="col-12">
                                                    <h3 className="mb-0">{entry.title}</h3>
                                                    
                                                    <span className={entry.assigmentStatus[0].title === 'failed' ? "text-danger ml-2 mb-0 font-weight-medium" : "text-success ml-2 mb-0 font-weight-medium"}>
                                                        {entry.assigmentStatus[0].title}
                                                    </span>
                                                </div>


                                            </div>
                                        </div>
                                        <img src={entry.mainImage[0].url} alt="..." className="img-fluid img-thumbnail"/>
                                    </div>

                                    <div className="row">
                                        <div className="col-9 mt-3">
                                            <p className="text-muted font-weight-normal">{entry.shortDescription}</p>
                                        </div>
                                        <div className="col-3 mt-3">
                                            <p className="text-muted font-weight-normal">{new Date(entry.postDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
                {/*<div className="row">*/}
                {/*    <div className="col-md-8 grid-margin stretch-card">*/}
                {/*        <div className="card">*/}
                {/*            <div className="card-body">*/}
                {/*                <div className="d-flex flex-row justify-content-between">*/}
                {/*                    <h4 className="card-title mb-1">Open Projects</h4>*/}
                {/*                    <p className="text-muted mb-1">Your data status</p>*/}
                {/*                </div>*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-12">*/}
                {/*                        <div className="preview-list">*/}
                {/*                            <div className="preview-item border-bottom">*/}
                {/*                                <div className="preview-thumbnail">*/}
                {/*                                    <div className="preview-icon bg-primary">*/}
                {/*                                        <i className="mdi mdi-file-document"></i>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                                <div className="preview-item-content d-sm-flex flex-grow">*/}
                {/*                                    <div className="flex-grow">*/}
                {/*                                        <h6 className="preview-subject">Admin dashboard design</h6>*/}
                {/*                                        <p className="text-muted mb-0">Broadcast web app mockup</p>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">*/}
                {/*                                        <p className="text-muted">15 minutes ago</p>*/}
                {/*                                        <p className="text-muted mb-0">30 tasks, 5 issues </p>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="preview-item border-bottom">*/}
                {/*                                <div className="preview-thumbnail">*/}
                {/*                                    <div className="preview-icon bg-success">*/}
                {/*                                        <i className="mdi mdi-cloud-download"></i>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                                <div className="preview-item-content d-sm-flex flex-grow">*/}
                {/*                                    <div className="flex-grow">*/}
                {/*                                        <h6 className="preview-subject">Wordpress Development</h6>*/}
                {/*                                        <p className="text-muted mb-0">Upload new design</p>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">*/}
                {/*                                        <p className="text-muted">1 hour ago</p>*/}
                {/*                                        <p className="text-muted mb-0">23 tasks, 5 issues </p>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="preview-item border-bottom">*/}
                {/*                                <div className="preview-thumbnail">*/}
                {/*                                    <div className="preview-icon bg-info">*/}
                {/*                                        <i className="mdi mdi-clock"></i>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                                <div className="preview-item-content d-sm-flex flex-grow">*/}
                {/*                                    <div className="flex-grow">*/}
                {/*                                        <h6 className="preview-subject">Project meeting</h6>*/}
                {/*                                        <p className="text-muted mb-0">New project discussion</p>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">*/}
                {/*                                        <p className="text-muted">35 minutes ago</p>*/}
                {/*                                        <p className="text-muted mb-0">15 tasks, 2 issues</p>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="preview-item border-bottom">*/}
                {/*                                <div className="preview-thumbnail">*/}
                {/*                                    <div className="preview-icon bg-danger">*/}
                {/*                                        <i className="mdi mdi-email-open"></i>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                                <div className="preview-item-content d-sm-flex flex-grow">*/}
                {/*                                    <div className="flex-grow">*/}
                {/*                                        <h6 className="preview-subject">Broadcast Mail</h6>*/}
                {/*                                        <p className="text-muted mb-0">Sent release details to team</p>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">*/}
                {/*                                        <p className="text-muted">55 minutes ago</p>*/}
                {/*                                        <p className="text-muted mb-0">35 tasks, 7 issues </p>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="preview-item">*/}
                {/*                                <div className="preview-thumbnail">*/}
                {/*                                    <div className="preview-icon bg-warning">*/}
                {/*                                        <i className="mdi mdi-chart-pie"></i>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                                <div className="preview-item-content d-sm-flex flex-grow">*/}
                {/*                                    <div className="flex-grow">*/}
                {/*                                        <h6 className="preview-subject">UI Design</h6>*/}
                {/*                                        <p className="text-muted mb-0">New application planning</p>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">*/}
                {/*                                        <p className="text-muted">50 minutes ago</p>*/}
                {/*                                        <p className="text-muted mb-0">27 tasks, 4 issues </p>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <div className="col-sm-4 grid-margin">*/}
                {/*        <div className="card">*/}
                {/*            <div className="card-body">*/}
                {/*                <h5>Revenue</h5>*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-8 col-sm-12 col-xl-8 my-auto">*/}
                {/*                        <div className="d-flex d-sm-block d-md-flex align-items-center">*/}
                {/*                            <h2 className="mb-0">$32123</h2>*/}
                {/*                            <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>*/}
                {/*                        </div>*/}
                {/*                        <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">*/}
                {/*                        <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-sm-4 grid-margin">*/}
                {/*        <div className="card">*/}
                {/*            <div className="card-body">*/}
                {/*                <h5>Sales</h5>*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-8 col-sm-12 col-xl-8 my-auto">*/}
                {/*                        <div className="d-flex d-sm-block d-md-flex align-items-center">*/}
                {/*                            <h2 className="mb-0">$45850</h2>*/}
                {/*                            <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>*/}
                {/*                        </div>*/}
                {/*                        <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">*/}
                {/*                        <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-sm-4 grid-margin">*/}
                {/*        <div className="card">*/}
                {/*            <div className="card-body">*/}
                {/*                <h5>Purchase</h5>*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-8 col-sm-12 col-xl-8 my-auto">*/}
                {/*                        <div className="d-flex d-sm-block d-md-flex align-items-center">*/}
                {/*                            <h2 className="mb-0">$2039</h2>*/}
                {/*                            <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>*/}
                {/*                        </div>*/}
                {/*                        <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">*/}
                {/*                        <i className="icon-lg mdi mdi-monitor text-success ml-auto"></i>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="row ">*/}
                {/*    <div className="col-12 grid-margin">*/}
                {/*        <div className="card">*/}
                {/*            <div className="card-body">*/}
                {/*                <h4 className="card-title">Order Status</h4>*/}
                {/*                <div className="table-responsive">*/}
                {/*                    <table className="table">*/}
                {/*                        <thead>*/}
                {/*                        <tr>*/}
                {/*                            <th>*/}
                {/*                                <div className="form-check form-check-muted m-0">*/}
                {/*                                    <label className="form-check-label">*/}
                {/*                                        <input type="checkbox" className="form-check-input"></input>*/}
                {/*                                    </label>*/}
                {/*                                </div>*/}
                {/*                            </th>*/}
                {/*                            <th> Client Name</th>*/}
                {/*                            <th> Order No</th>*/}
                {/*                            <th> Product Cost</th>*/}
                {/*                            <th> Project</th>*/}
                {/*                            <th> Payment Mode</th>*/}
                {/*                            <th> Start Date</th>*/}
                {/*                            <th> Payment Status</th>*/}
                {/*                        </tr>*/}
                {/*                        </thead>*/}
                {/*                        <tbody>*/}
                {/*                        <tr>*/}
                {/*                            <td>*/}
                {/*                                <div className="form-check form-check-muted m-0">*/}
                {/*                                    <label className="form-check-label">*/}
                {/*                                        <input type="checkbox" className="form-check-input"></input>*/}
                {/*                                    </label>*/}
                {/*                                </div>*/}
                {/*                            </td>*/}
                {/*                            <td>*/}
                {/*                                <img*/}
                {/*                                    src="../../../Werkstuk_CMSDEV_ParanormaxApp-NielsMoens/paranormax/public/images/faces/face1.jpg"*/}
                {/*                                    alt="image"/>*/}
                {/*                                <span className="pl-2">Henry Klein</span>*/}
                {/*                            </td>*/}
                {/*                            <td> 02312</td>*/}
                {/*                            <td> $14,500</td>*/}
                {/*                            <td> Dashboard</td>*/}
                {/*                            <td> Credit card</td>*/}
                {/*                            <td> 04 Dec 2019</td>*/}
                {/*                            <td>*/}
                {/*                                <div className="badge badge-outline-success">Approved</div>*/}
                {/*                            </td>*/}
                {/*                        </tr>*/}
                {/*                        <tr>*/}
                {/*                            <td>*/}
                {/*                                <div className="form-check form-check-muted m-0">*/}
                {/*                                    <label className="form-check-label">*/}
                {/*                                        <input type="checkbox" className="form-check-input"></input>*/}
                {/*                                    </label>*/}
                {/*                                </div>*/}
                {/*                            </td>*/}
                {/*                            <td>*/}
                {/*                                <img*/}
                {/*                                    src="../../../Werkstuk_CMSDEV_ParanormaxApp-NielsMoens/paranormax/public/images/faces/face2.jpg"*/}
                {/*                                    alt="image"/>*/}
                {/*                                <span className="pl-2">Estella Bryan</span>*/}
                {/*                            </td>*/}
                {/*                            <td> 02312</td>*/}
                {/*                            <td> $14,500</td>*/}
                {/*                            <td> Website</td>*/}
                {/*                            <td> Cash on delivered</td>*/}
                {/*                            <td> 04 Dec 2019</td>*/}
                {/*                            <td>*/}
                {/*                                <div className="badge badge-outline-warning">Pending</div>*/}
                {/*                            </td>*/}
                {/*                        </tr>*/}
                {/*                        <tr>*/}
                {/*                            <td>*/}
                {/*                                <div className="form-check form-check-muted m-0">*/}
                {/*                                    <label className="form-check-label">*/}
                {/*                                        <input type="checkbox" className="form-check-input"></input>*/}
                {/*                                    </label>*/}
                {/*                                </div>*/}
                {/*                            </td>*/}
                {/*                            <td>*/}
                {/*                                <img*/}
                {/*                                    src="../../../Werkstuk_CMSDEV_ParanormaxApp-NielsMoens/paranormax/public/images/faces/face5.jpg"*/}
                {/*                                    alt="image"/>*/}
                {/*                                <span className="pl-2">Lucy Abbott</span>*/}
                {/*                            </td>*/}
                {/*                            <td> 02312</td>*/}
                {/*                            <td> $14,500</td>*/}
                {/*                            <td> App design</td>*/}
                {/*                            <td> Credit card</td>*/}
                {/*                            <td> 04 Dec 2019</td>*/}
                {/*                            <td>*/}
                {/*                                <div className="badge badge-outline-danger">Rejected</div>*/}
                {/*                            </td>*/}
                {/*                        </tr>*/}
                {/*                        <tr>*/}
                {/*                            <td>*/}
                {/*                                <div className="form-check form-check-muted m-0">*/}
                {/*                                    <label className="form-check-label">*/}
                {/*                                        <input type="checkbox" className="form-check-input"></input>*/}
                {/*                                    </label>*/}
                {/*                                </div>*/}
                {/*                            </td>*/}
                {/*                            <td>*/}
                {/*                                <img*/}
                {/*                                    src="../../../Werkstuk_CMSDEV_ParanormaxApp-NielsMoens/paranormax/public/images/faces/face3.jpg"*/}
                {/*                                    alt="image"/>*/}
                {/*                                <span className="pl-2">Peter Gill</span>*/}
                {/*                            </td>*/}
                {/*                            <td> 02312</td>*/}
                {/*                            <td> $14,500</td>*/}
                {/*                            <td> Development</td>*/}
                {/*                            <td> Online Payment</td>*/}
                {/*                            <td> 04 Dec 2019</td>*/}
                {/*                            <td>*/}
                {/*                                <div className="badge badge-outline-success">Approved</div>*/}
                {/*                            </td>*/}
                {/*                        </tr>*/}
                {/*                        <tr>*/}
                {/*                            <td>*/}
                {/*                                <div className="form-check form-check-muted m-0">*/}
                {/*                                    <label className="form-check-label">*/}
                {/*                                        <input type="checkbox" className="form-check-input"></input>*/}
                {/*                                    </label>*/}
                {/*                                </div>*/}
                {/*                            </td>*/}
                {/*                            <td>*/}
                {/*                                <img*/}
                {/*                                    src="../../../Werkstuk_CMSDEV_ParanormaxApp-NielsMoens/paranormax/public/images/faces/face4.jpg"*/}
                {/*                                    alt="image"/>*/}
                {/*                                <span className="pl-2">Sallie Reyes</span>*/}
                {/*                            </td>*/}
                {/*                            <td> 02312</td>*/}
                {/*                            <td> $14,500</td>*/}
                {/*                            <td> Website</td>*/}
                {/*                            <td> Credit card</td>*/}
                {/*                            <td> 04 Dec 2019</td>*/}
                {/*                            <td>*/}
                {/*                                <div className="badge badge-outline-success">Approved</div>*/}
                {/*                            </td>*/}
                {/*                        </tr>*/}
                {/*                        </tbody>*/}
                {/*                    </table>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <div className="col-12">*/}
                {/*        <div className="card">*/}
                {/*            <div className="card-body">*/}
                {/*                <h4 className="card-title">Visitors by Countries</h4>*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-md-5">*/}
                {/*                        <div className="table-responsive">*/}
                {/*                            <table className="table">*/}
                {/*                                <tbody>*/}
                {/*                                <tr>*/}
                {/*                                    <td>*/}
                {/*                                        <i className="flag-icon flag-icon-us"></i>*/}
                {/*                                    </td>*/}
                {/*                                    <td>USA</td>*/}
                {/*                                    <td className="text-right"> 1500</td>*/}
                {/*                                    <td className="text-right font-weight-medium"> 56.35%</td>*/}
                {/*                                </tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>*/}
                {/*                                        <i className="flag-icon flag-icon-de"></i>*/}
                {/*                                    </td>*/}
                {/*                                    <td>Germany</td>*/}
                {/*                                    <td className="text-right"> 800</td>*/}
                {/*                                    <td className="text-right font-weight-medium"> 33.25%</td>*/}
                {/*                                </tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>*/}
                {/*                                        <i className="flag-icon flag-icon-au"></i>*/}
                {/*                                    </td>*/}
                {/*                                    <td>Australia</td>*/}
                {/*                                    <td className="text-right"> 760</td>*/}
                {/*                                    <td className="text-right font-weight-medium"> 15.45%</td>*/}
                {/*                                </tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>*/}
                {/*                                        <i className="flag-icon flag-icon-gb"></i>*/}
                {/*                                    </td>*/}
                {/*                                    <td>United Kingdom</td>*/}
                {/*                                    <td className="text-right"> 450</td>*/}
                {/*                                    <td className="text-right font-weight-medium"> 25.00%</td>*/}
                {/*                                </tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>*/}
                {/*                                        <i className="flag-icon flag-icon-ro"></i>*/}
                {/*                                    </td>*/}
                {/*                                    <td>Romania</td>*/}
                {/*                                    <td className="text-right"> 620</td>*/}
                {/*                                    <td className="text-right font-weight-medium"> 10.25%</td>*/}
                {/*                                </tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>*/}
                {/*                                        <i className="flag-icon flag-icon-br"></i>*/}
                {/*                                    </td>*/}
                {/*                                    <td>Brasil</td>*/}
                {/*                                    <td className="text-right"> 230</td>*/}
                {/*                                    <td className="text-right font-weight-medium"> 75.00%</td>*/}
                {/*                                </tr>*/}
                {/*                                </tbody>*/}
                {/*                            </table>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-md-7">*/}
                {/*                        <div id="audience-map" className="vector-map"></div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default Assignments;
