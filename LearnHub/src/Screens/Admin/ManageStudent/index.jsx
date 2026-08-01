import { useEffect, useState } from "react";
import API from "../../../api/authApi";
import {
  Table,
  Button,
  Form,
  Modal,
  Spinner,
  Card,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { FaSearch, FaTrash, FaUsers } from "react-icons/fa";
import "../../../assets/css/admin.css";

export const ManageStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await API.get("/admin/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStudents(data.students);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase())
  );
  const handleDelete = async () => {
    try {
      setDeleting(true);

      const token = localStorage.getItem("token");

      await API.delete(`/admin/students/${selectedStudent._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStudents((prev) =>
        prev.filter((student) => student._id !== selectedStudent._id)
      );

      setShowModal(false);
      setSelectedStudent(null);

      alert("Student deleted successfully.");
    } catch (error) {
      console.log(error);
      alert("Unable to delete student.");
    } finally {
      setDeleting(false);
    }
  };
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  return (
    <div className="manage-users">

      <Row className="mb-4">

        <Col md={4}>

          <Card className="bg-dark text-white border-secondary shadow">

            <Card.Body>

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h6>Total Students</h6>

                  <h2>{students.length}</h2>

                </div>

                <FaUsers size={35} />

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="text-white m-0">Manage Students</h2>

        <span className="badge bg-primary fs-6">

          {filteredStudents.length} Students

        </span>

      </div>

      <InputGroup className="mb-4">

        <InputGroup.Text>

          <FaSearch />

        </InputGroup.Text>

        <Form.Control

          placeholder="Search by name or email..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

        />

      </InputGroup>

      <Table hover bordered responsive variant="dark">

        <thead>

          <tr>

            <th>#</th>

            <th>Name</th>

            <th>Email</th>

            <th>Joined</th>

            <th width="120">Action</th>

          </tr>

        </thead>

        <tbody>

          {

            filteredStudents.length === 0 ?

              (

                <tr>

                  <td
                    colSpan={5}
                    className="text-center py-4"
                  >

                    No Students Found

                  </td>

                </tr>

              )

              :

              (

                filteredStudents.map((student, index) => (

                  <tr key={student._id}>

                    <td>{index + 1}</td>

                    <td>{student.name}</td>

                    <td>{student.email}</td>

                    <td>

                      {new Date(student.createdAt).toLocaleDateString()}

                    </td>

                    <td>

                      <Button

                        variant="outline-danger"

                        size="sm"

                        onClick={() => {

                          setSelectedStudent(student);

                          setShowModal(true);

                        }}

                      >

                        <FaTrash className="me-1" />

                        Delete

                      </Button>

                    </td>

                  </tr>

                ))

              )

          }

        </tbody>

      </Table>

      <Modal

        show={showModal}

        onHide={() => setShowModal(false)}

        centered

      >

        <Modal.Header closeButton>

          <Modal.Title>

            Delete Student

          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          Are you sure you want to delete

          <strong>

            {" "}

            {selectedStudent?.name}

          </strong>

          ?

        </Modal.Body>

        <Modal.Footer>

          <Button

            variant="secondary"

            onClick={() => setShowModal(false)}

            disabled={deleting}

          >

            Cancel

          </Button>

          <Button

            variant="danger"

            onClick={handleDelete}

            disabled={deleting}

          >

            {

              deleting ?

                "Deleting..."

                :

                "Delete"

            }

          </Button>

        </Modal.Footer>

      </Modal>

    </div>
  );
};

