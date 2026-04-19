import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HelpCircleOutline, Trophy, People, GameController, StatsChart, Flash } from 'react-ionicons';
import { colors } from "../constants/colors.jsx";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="dark-background">
            <Navbar expand="lg" className="navigation_bar px-4">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: 'pointer', color: colors.light, fontWeight: 'bold', fontSize: '1.5rem' }}>
                        <HelpCircleOutline color={colors.light} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                        kouleris trivia
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: colors.light }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Button 
                                className="login-btn-secondary me-lg-2 mb-2 mb-lg-0" 
                                onClick={() => navigate("/login")}
                                style={{ width: 'auto', padding: '8px 25px' }}
                            >
                                Login
                            </Button>
                            <Button 
                                className="login-btn-primary" 
                                onClick={() => navigate("/register")}
                                style={{ width: 'auto', padding: '8px 25px' }}
                            >
                                Register
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="flex-grow-1 d-flex flex-column justify-content-center py-5">
                <Row className="align-items-center mb-5">
                    <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                        <h1 className="display-3 fw-bold mb-3" style={{ color: '#fff' }}>
                            Master the <span style={{ color: colors.light }}>Trivia</span>
                        </h1>
                        <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem' }}>
                            Challenge your knowledge across multiple categories. Track your progress, earn points, and climb the leaderboard in the most engaging trivia experience.
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                            <Button 
                                className="login-btn-primary" 
                                onClick={() => navigate("/register")}
                                style={{ width: 'auto', padding: '12px 40px', fontSize: '1.1rem' }}
                            >
                                Get Started
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} className="text-center">
                        <div className="hero-icon-wrapper">
                            <GameController
                                color={colors.light}
                                height="250px"
                                width="250px"
                                className="hero-icon-pulse"
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 g-4">
                    <Col md={4}>
                        <div className="category-card h-100 p-4" style={{ cursor: 'default' }}>
                            <Flash color={colors.light} height="40px" width="40px" className="mb-3" />
                            <h4>Fast-Paced</h4>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>Quick rounds designed to test your reflexes and recall speed under pressure.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="category-card h-100 p-4" style={{ cursor: 'default' }}>
                            <StatsChart color={colors.light} height="40px" width="40px" className="mb-3" />
                            <h4>Track Progress</h4>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>Detailed statistics help you monitor your performance and improve over time.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="category-card h-100 p-4" style={{ cursor: 'default' }}>
                            <Trophy color={colors.light} height="40px" width="40px" className="mb-3" />
                            <h4>Competitve</h4>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>Earn points for every correct answer and prove you're the ultimate trivia master.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <footer className="py-4 mt-auto text-center" style={{ borderTop: '1px solid #3C0753', color: 'rgba(255,255,255,0.5)' }}>
                <Container>
                    <p className="mb-0">&copy; 2024 kouleris trivia game. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    );
}
