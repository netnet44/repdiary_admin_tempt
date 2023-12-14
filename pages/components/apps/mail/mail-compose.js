import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Form, Nav, OverlayTrigger, Row, Button, Tooltip } from "react-bootstrap";
import Seo from '../../../../shared/layout-components/seo/seo';

const MailCompose = () => {
  return (
    <>
        <Seo title="푸시알림"/>

    <PageHeader title="푸시알림" item="Apps" active_item="푸시알림"/>

    <div>

    <Row className="row-sm">
      <Col md={12} lg={4} xl={3} >
        <Card className=" custom-card">
          <Card.Body>
            <div>
              <div className="main-mail-menu">
                <Nav className=" main-nav-column mg-b-20">
                  <Nav.Item>
                    <Nav.Link className="nav-link" href="#Inbox">
                      <i className="fe fe-mail"></i> 건의사항
                      <span className="badge bg-light">20</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Starred">
                      <i className="fe fe-star"></i> 별표사항
                      <span className="badge bg-primary">3</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Important">
                      <i className="fe fe-bookmark"></i> 중요사항
                      <span className="badge bg-secondary">10</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#SentMail">
                      <i className="fe fe-send"></i> 보낸알림
                      <span className="badge bg-success">8</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Drafts">
                      <i className="fe fe-edit-2"></i> 해결중
                      <span className="badge bg-danger">15</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Spam">
                      <i className="fe fe-disc"></i> 미해결
                      <span className="badge bg-warning">128</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Trash">
                      <i className="fe fe-trash-2"></i> 쓰레기통
                      <span className="badge bg-info">6</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <label className="main-content-label main-content-label-sm">
                  Label
                </label>
                <nav className="nav main-nav-column">
                  <Nav.Link href="#Social">
                    <i className="fe fe-folder"></i> Social
                    <span className="badge bg-primary">10</span>
                  </Nav.Link>
                  <Nav.Link href="#Promotions">
                    <i className="fe fe-folder"></i> Promotions
                    <span className="badge bg-secondary">22</span>
                  </Nav.Link>
                  <Nav.Link href="#Updates">
                    <i className="fe fe-folder"></i> Updates
                    <span className="badge bg-success">17</span>
                  </Nav.Link>
                </nav>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={8} xl={9} md={12}>
        <Card className=" custom-card">
          <Card.Header>
            <h3 className="card-title tx-18">
              <label className="main-content-label tx-15">
                새로운 푸시 알림 작성
              </label>
            </h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    제목
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    시간
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    타겟
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row align-items-center">
                  <Form.Label className="col-sm-3 col-xl-2  tx-semibold">
                    부제목
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <div className="row">
                  <Form.Label className="col-sm-3 col-xl-2 form-label tx-semibold">
                    메시지
                  </Form.Label>
                  <div className="col-sm-9 col-xl-10">
                    <textarea rows="10" className="form-control"></textarea>
                  </div>
                </div>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className=" d-sm-flex rounded-0">
            <div className="">

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Attach</Tooltip>}
              >
                <i
                  className="fe fe-paperclip btn px-2  fs-16"
                  data-bs-toggle="tooltip"
                  title="Attach"
                  data-bs-original-title="Attach"
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Link</Tooltip>}
              >
                <i
                  className="fe fe-link btn px-2 fs-16"
                  data-bs-toggle="tooltip"
                  title="Link"
                  data-bs-original-title="Link"
                ></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Photos</Tooltip>}
              >
                <i
                  className="fe fe-image btn px-2 fs-16"
                  data-bs-toggle="tooltip"
                  title="Photos"
                  data-bs-original-title="Photos"
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Delete</Tooltip>}
              >
                <i
                  className="fe fe-trash btn px-2 fs-16"
                  data-bs-toggle="tooltip"
                  title="Delete"
                  data-bs-original-title="Delete"
                ></i>
              </OverlayTrigger>
            </div>
            <div className="btn-list ms-auto">
              <Button
                variant="Danger" className="btn btn-danger">취소</Button>
              <Button
                variant="primary" className="btn btn-primary">알림보내기</Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    </div>
    </>
  )
}
MailCompose.layout = "Contentlayout"

export default MailCompose