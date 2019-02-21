import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";

export class MenuButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: ""
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClosePP = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Planned Parenthood Funding");
    };
    handleCloseGI = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Gender Identity");
    };
    handleCloseCF = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Confederate Flag");
    };
    handleCloseDP = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Death Penalty");
    };
    handleCloseISec = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Information Security");
    };
    handleCloseNN = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Net Neutrality");
    };
    handleCloseSS = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Social Security");
    };
    handleCloseHC = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Healthcare");
    };
    handleCloseMW = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Minimum Wage");
    };
    handleCloseT = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Taxes");
    };
    handleCloseW = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Welfare");
    };
    handleCloseNK = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("North Korea");
    };
    handleCloseTRR = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Terrorism");
    };
    handleCloseCC = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Climate Change");
    };
    handleCloseIS = () => {
        this.setState({ anchorEl: null });
        this.props.setTopic("Israel");
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <React.Fragment>
                <Button
                    variant="text"
                    className="header-bottom-buttons"
                    style={{ textTransform: "none", color: "lavender" }}
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Other
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleCloseCC}>Climate Change</MenuItem>
                    <MenuItem onClick={this.handleCloseCF}>Confederate Flag</MenuItem>
                    <MenuItem onClick={this.handleCloseDP}>Death Penalty</MenuItem>
                    <MenuItem onClick={this.handleCloseGI}>Gender Identity</MenuItem>
                    <MenuItem onClick={this.handleCloseHC}>Healthcare</MenuItem>
                    <MenuItem onClick={this.handleCloseIS}>Israel</MenuItem>
                    <MenuItem onClick={this.handleClosePP}>Planned Parenthood</MenuItem>
                    <MenuItem onClick={this.handleCloseMW}>Minimum Wage</MenuItem>
                    <MenuItem onClick={this.handleCloseNN}>Net Neutrality</MenuItem>
                    <MenuItem onClick={this.handleCloseNK}>North Korea</MenuItem>
                    <MenuItem onClick={this.handleCloseISec}>Information Security</MenuItem>
                    <MenuItem onClick={this.handleCloseSS}>Social Security</MenuItem>
                    <MenuItem onClick={this.handleCloseT}>Taxes</MenuItem>
                    <MenuItem onClick={this.handleCloseTRR}>Terrorism</MenuItem>
                    <MenuItem onClick={this.handleCloseW}>Welfare</MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        topic: state.topic
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTopic: topic => {
            setTopic(topic)(dispatch);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuButtonComponent)