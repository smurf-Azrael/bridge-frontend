import { useState } from "react";
import { Avatar, Button, Modal, Space, Spin, Typography } from "antd";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { RightOutlined } from "@ant-design/icons";
import ActionTitle from "../common/ActionTitle";
import { Theme } from "../../theme/theme";
import { useAppSelector } from "../../redux/store";
import { NonEVMMode, useNonEVMContext } from "../../providers/NonEVMContextProvider";
import TerraStationInstallNeededProviderModal from "./TerraInstallNeededProviderModal";

const { Text } = Typography;

const useStyles = createUseStyles<string, { isMobile: boolean }, Theme>((theme: Theme) => ({
  connectModal: {
    width: "100%",
    minWidth: props => (props.isMobile ? "100%" : 500),
    background: theme.secondBackground,
    border: `1px solid ${theme.primaryBackground}`,
    "& .ant-modal-content": {
      background: theme.secondBackground,
      boxShadow: props => (props.isMobile ? "none" : ""),
      "& .ant-modal-close": {
        color: theme.surfacePrimary,
      },
      "& .ant-modal-header": {
        background: theme.secondBackground,
        borderBottom: "none",
        "& .ant-modal-title": {
          color: theme.surfacePrimary,
          "& .ant-typography": {
            color: theme.surfacePrimary,
          },
        },
      },
      "& .ant-modal-body": {
        "& .ant-spin-blur": {
          border: "none",
          borderRadius: 16,
        },
        "& .ant-spin-spinning": {
          borderRadius: 16,
          opacity: 0.8,
          background: theme.primaryBackground,
        },
        "& .ant-spin-nested-loading": {
          "& .ant-spin": {
            maxHeight: "100%",
          },
        },
      },
      "& .ant-modal-footer": {
        border: "none",
        padding: props => (props.isMobile ? "8px 16px" : "10px 16px"),
        "& .ant-btn-link": {
          color: theme.primaryBrand,
        },
      },
    },
    "& .ant-typography": {
      color: theme.surfacePrimary,
    },
  },
  provider: {
    background: theme.primaryBackground,
    border: "none",
    borderRadius: 16,
    width: "100%",
    height: 60,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    "& .ant-typography": {
      color: theme.surfacePrimary,
    },
    "@global": {
      ".ant-spin": {
        marginTop: 6,
      },
    },
  },
  arrow: {
    marginRight: 15,
    color: theme.surfacePrimary,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: props => (props.isMobile ? 0 : 16),
  },
  errorInfo: {
    width: "100%",
    paddingTop: 72,
  },
  errorText: {
    fontWeight: 600,
    fontSize: 14,
    color: theme.surfacePrimary,
    textAlign: "center",
  },
  errorBtn: {
    marginTop: 16,
    width: "100%",
    height: 56,
    lineHeight: "56px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    background: theme.primaryBrand,
    color: theme.unityWhite,
    borderRadius: 16,
  },
}));

interface ProviderModalProps {
  visible: boolean;
  onCancel: () => void;
}

function NonEVMProvider({ provider, onClick }) {
  const { isMobile } = useAppSelector(state => state.windowWidth);
  const classes = useStyles({ isMobile });
  return (
    <>
      <div className={classNames(classes.provider)} onClick={onClick}>
        <Space>
          <Avatar src={provider.logo} shape="circle" />
          <Text>{provider.name}</Text>
        </Space>
        <RightOutlined className={classes.arrow} />
      </div>
    </>
  );
}

function Footer() {
  const { isMobile } = useAppSelector(state => state.windowWidth);
  const classes = useStyles({ isMobile });

  return (
    <div className={classes.footer}>
      <Text>By connecting, I accept</Text>
      <Text>
        <Button
          type="link"
          size="small"
          onClick={() => window.open("https://get.celer.app/cbridge-v2-doc/tos-cbridge-2.pdf")}
        >
          Terms of Use
        </Button>
      </Text>
    </div>
  );
}

function ConnectErrorModal({ visible, onCancel }: ProviderModalProps): JSX.Element {
  const { isMobile } = useAppSelector(state => state.windowWidth);
  const classes = useStyles({ isMobile });
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      className={classes.connectModal}
      bodyStyle={{ padding: isMobile ? "0 16px 0 16px" : 24 }}
      title={null}
      maskClosable={false}
      closable
      footer={null}
    >
      <div className={classes.errorInfo}>
        <div className={classes.errorText}>
          Wallet not detected. Please use cBridge in a desktop browser with Metamask installed or a mobile wallet dApp
          browser.
        </div>
        <div className={classes.errorBtn} onClick={onCancel}>
          OK
        </div>
      </div>
    </Modal>
  );
}

export default function TerraProviderModal({ visible, onCancel }: ProviderModalProps): JSX.Element {
  const { isMobile } = useAppSelector(state => state.windowWidth);
  const classes = useStyles({ isMobile });
  const [connectErrorVisible, setConnectErroeVisible] = useState(false);
  const [stationInstallVisible, setStationInstallVisible] = useState(false);
  const { terraStationInstalled } = useNonEVMContext();
  const { loadNonEVMModal } = useNonEVMContext();
  const handleSelectProvider = async () => {
    const mode: NonEVMMode =
      process.env.REACT_APP_ENV === "TEST" || process.env.REACT_APP_ENV === "DEV"
        ? NonEVMMode.terraTest
        : NonEVMMode.terraMainnet;

    if (terraStationInstalled) {
      await loadNonEVMModal(mode);
      onCancel();
      return;
    }

    setStationInstallVisible(true);
  };

  const handleStationInstallCancel = () => {
    setStationInstallVisible(false);
    onCancel();
  };

  return (
    <>
      <Modal
        closable
        visible={visible}
        className={classes.connectModal}
        title={<ActionTitle title="Connect Your Wallet" />}
        onCancel={onCancel}
        footer={<Footer />}
        maskClosable={false}
        bodyStyle={{ padding: isMobile ? "0 16px 0 16px" : 24 }}
      >
        <div style={{ width: "100%" }}>
          <Spin spinning={false}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", rowGap: 8 }}>
              <NonEVMProvider
                provider={{ logo: "./terraStation.png", name: "Terra Station Wallet" }}
                onClick={handleSelectProvider}
              />
            </div>
          </Spin>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "16px 0 0",
              color: "#FFAA00",
            }}
          >
            <div>*Beta software. Use at your own risk!</div>
          </div>
          {isMobile ? null : <div style={{ height: 30 }} />}
        </div>
      </Modal>
      <TerraStationInstallNeededProviderModal visible={stationInstallVisible} onCancel={handleStationInstallCancel} />
      <ConnectErrorModal visible={connectErrorVisible} onCancel={() => setConnectErroeVisible(!connectErrorVisible)} />
    </>
  );
}
