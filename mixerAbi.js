var MixerAbi={"contracts":{"contracts/LinkableRing.sol:LinkableRing":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"RING_SIZE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]"},"contracts/Mixer.sol:Mixer":{"abi":"[{\"constant\":true,\"inputs\":[{\"name\":\"ring_guid\",\"type\":\"bytes32\"}],\"name\":\"Message\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"denomination\",\"type\":\"uint256\"},{\"name\":\"pub_x\",\"type\":\"uint256\"},{\"name\":\"pub_y\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"ring_id\",\"type\":\"bytes32\"},{\"name\":\"tag_x\",\"type\":\"uint256\"},{\"name\":\"tag_y\",\"type\":\"uint256\"},{\"name\":\"ctlist\",\"type\":\"uint256[]\"}],\"name\":\"Withdraw\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"ring_id\",\"type\":\"bytes32\"},{\"indexed\":true,\"name\":\"pub_x\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"MixerDeposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"ring_id\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"tag_x\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"MixerWithdraw\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"ring_id\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"message\",\"type\":\"bytes32\"}],\"name\":\"MixerReady\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"ring_id\",\"type\":\"bytes32\"}],\"name\":\"MixerDead\",\"type\":\"event\"}]"},"contracts/bn256g1.sol:bn256g1":{"abi":"[]"}},"version":"0.4.20+commit.3155dd80.Linux.g++"}
