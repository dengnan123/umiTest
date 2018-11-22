import React, { Component } from "react";
import { connect } from "dva";
import PropTypes from "prop-types";
import { Row, Col, Table, Popconfirm, Divider, Icon, Card, Input } from "antd";
import styles from "./index.less";

class FleetList extends Component {
  state = {
    isRes: true
  };

  focus = () => {
    this.setState({
      isRes: false
    });
  };

  render() {
    const { loading } = this.props;
    const { list, totalRecords } = this.props;
    const { isRes } = this.state;
    const {
      location: {
        query: { pageIndex = 1, countPerPage = 10 }
      }
    } = this.props;
    const tableProps = {
      rowKey: "id",
      dataSource: list,
      loading: loading.effects["indexModel/getList"],
      className: styles.table,
      pagination: {
        showQuickJumper: true,
        showSizeChanger: true,
        // hideOnSinglePage: true,
        onChange: this._changePageIndex,
        onShowSizeChange: this._onShowSizeChange,
        total: totalRecords || null,
        pageSize: parseInt(countPerPage, 10),
        current: parseInt(pageIndex, 10)
      }
    };

    const columns = [
      {
        title: "",
        dataIndex: "title",
        key: "title",
        className: styles.span,
        render: (text, record) => <span>{text}</span>
      }
    ];
    return (
      <div className={styles.pageContent}>
        <Input
          className={isRes ? styles.redSty : styles.normalSty}
          onFocus={this.focus}
        />
        <input style={{ width: 120 }} />
        <Row type="flex" justify="center">
          <Col span={24}>
            {/* <Table {...tableProps} columns={columns} /> */}
            {list.map(value => {
              return (
                <Card
                  key={value.id}
                  title={value.title}
                  bordered={false}
                  className={styles.cardSpan}
                >
                  {value.body}
                </Card>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

function indexStateToProps(state) {
  const { loading } = state;
  const { list, count } = state.indexModel;
  return {
    loading,
    list,
    count
  };
}

export default connect(indexStateToProps)(FleetList);
