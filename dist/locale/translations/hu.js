var Language=function(e,t,s,r){this.language=e,this.months=t,this.monthsAbbr=s,this.days=r,this.rtl=!1,this.ymd=!1,this.yearSuffix=""},prototypeAccessors={language:{configurable:!0},months:{configurable:!0},monthsAbbr:{configurable:!0},days:{configurable:!0}};prototypeAccessors.language.get=function(){return this._language},prototypeAccessors.language.set=function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e},prototypeAccessors.months.get=function(){return this._months},prototypeAccessors.months.set=function(e){if(12!==e.length)throw new RangeError("There must be 12 months for "+this.language+" language");this._months=e},prototypeAccessors.monthsAbbr.get=function(){return this._monthsAbbr},prototypeAccessors.monthsAbbr.set=function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for "+this.language+" language");this._monthsAbbr=e},prototypeAccessors.days.get=function(){return this._days},prototypeAccessors.days.set=function(e){if(7!==e.length)throw new RangeError("There must be 7 days for "+this.language+" language");this._days=e},Object.defineProperties(Language.prototype,prototypeAccessors);var hu=new Language("Hungarian",["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],["Jan","Febr","Márc","Ápr","Máj","Jún","Júl","Aug","Szept","Okt","Nov","Dec"],["Vas","Hét","Ke","Sze","Csü","Pén","Szo"]);export default hu;
