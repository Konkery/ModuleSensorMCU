class ClassSensorMCU extends ClassSensor {
    constructor(opts) {
        ClassSensor.call(this, opts);
    }
    Start(_chNum, _period, _opts) {
        if (_chNum < 0 || _chNum >= this._QuantityChannel || typeof _period !== 'number') throw new Error();
        this._ChStatus[_chNum] = 1;

        if (!this._Interval) this._Interval = setInterval(() => {
            this.Ch0_Value = E.getTemperature();
        }, _period);
    }
    Stop(_chNum) {
        this._ChStatus[_chNum] = 0;
        if (!this._ChStatus.find(s => s !== 0)) clearInterval(this._Interval);
    }
}
exports = ClassSensorMCU;