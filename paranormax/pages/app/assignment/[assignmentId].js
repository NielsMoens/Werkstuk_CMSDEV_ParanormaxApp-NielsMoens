import {useQuery} from "@apollo/client";
import GET_QUEUED_ASSIGNMENTS_OF_ASSIGNMENT from "../../../lib/Queries/getQueuedUsersOfAssignment";
import {useRouter} from "next/router";

const Assignment = () => {
    const router = useRouter();
    const queuedAssignments = useQuery(GET_QUEUED_ASSIGNMENTS_OF_ASSIGNMENT, {
        variables: {
            assignment: router.query.assignmentId
        }
    });
    const { data, loading, error } = queuedAssignments;

    if (loading) return (
        <></>
    );

    const { entries } = data;

    if (entries.length <= 0)  return (
        <>No entries</>
    );

    const assignment = entries[0].assignment;

    return (
        <>
            <div className="content-wrapper">
                <div className="row">
                    {entries.map((entry) => (
                        <div key={entry.id} className="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <div className=" row d-flex align-items-center align-self-start">
                                                <div className="col-12">
                                                    <h3 className="mb-0">{assignment.title}</h3>
                                                    <span
                                                        className={assignment.status === 'failed' ? "text-danger ml-2 mb-0 font-weight-medium" : "text-success ml-2 mb-0 font-weight-medium"}>
                                                        {assignment.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        {entry.assignee.map((assignee) => (
                                            <div key={assignee.id} className="col-12">
                                                { JSON.stringify(assignee) }
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

Assignment.requireAuth = true;
// Assignment.requiresAdmin = true;
export default Assignment;
