"use strict";function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}const ProtoDataType=require("../autogenerated/Concept_pb").AttributeType.DATA_TYPE;function ResponseConverter(a,b){this.iteratorFactory=b,this.conceptFactory=a}ResponseConverter.prototype.getLabel=function(a){return a.getConceptmethodRes().getResponse().getSchemaconceptGetlabelRes().getLabel()},ResponseConverter.prototype.isImplicit=function(a){return a.getConceptmethodRes().getResponse().getSchemaconceptIsimplicitRes().getImplicit()},ResponseConverter.prototype.subs=function(a){const b=a.getConceptmethodRes().getResponse().getSchemaconceptSubsIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getSchemaconceptSubsIterRes().getSchemaconcept())},ResponseConverter.prototype.sups=function(a){const b=a.getConceptmethodRes().getResponse().getSchemaconceptSupsIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getSchemaconceptSupsIterRes().getSchemaconcept())},ResponseConverter.prototype.getSup=function(a){const b=a.getConceptmethodRes().getResponse().getSchemaconceptGetsupRes();return b.hasNull()?null:this.conceptFactory.createConcept(b.getSchemaconcept())},ResponseConverter.prototype.instances=function(a){const b=a.getConceptmethodRes().getResponse().getTypeInstancesIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getTypeInstancesIterRes().getThing())},ResponseConverter.prototype.getAttributeTypes=function(a){const b=a.getConceptmethodRes().getResponse().getTypeAttributesIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getTypeAttributesIterRes().getAttributetype())},ResponseConverter.prototype.getKeyTypes=function(a){const b=a.getConceptmethodRes().getResponse().getTypeKeysIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getTypeKeysIterRes().getAttributetype())},ResponseConverter.prototype.isAbstract=function(a){return a.getConceptmethodRes().getResponse().getTypeIsabstractRes().getAbstract()},ResponseConverter.prototype.getRolesPlayedByType=function(a){const b=a.getConceptmethodRes().getResponse().getTypePlayingIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getTypePlayingIterRes().getRole())},ResponseConverter.prototype.addEntity=function(a){const b=a.getConceptmethodRes().getResponse().getEntitytypeCreateRes().getEntity();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.getAttribute=function(a){const b=a.getConceptmethodRes().getResponse().getAttributetypeAttributeRes();return b.hasNull()?null:this.conceptFactory.createConcept(b.getAttribute())},ResponseConverter.prototype.putAttribute=function(a){const b=a.getConceptmethodRes().getResponse().getAttributetypeCreateRes().getAttribute();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.getDataTypeOfType=function(a){const b=a.getConceptmethodRes().getResponse().getAttributetypeDatatypeRes().getDatatype();return b===ProtoDataType.STRING?"String":b===ProtoDataType.BOOLEAN?"Boolean":b===ProtoDataType.INTEGER?"Integer":b===ProtoDataType.LONG?"Long":b===ProtoDataType.FLOAT?"Float":b===ProtoDataType.DOUBLE?"Double":b===ProtoDataType.DATE?"Date":void 0},ResponseConverter.prototype.getRegex=function(a){return a.getConceptmethodRes().getResponse().getAttributetypeGetregexRes().getRegex()},ResponseConverter.prototype.addRelationship=function(a){const b=a.getConceptmethodRes().getResponse().getRelationtypeCreateRes().getRelation();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.getRelatedRoles=function(a){const b=a.getConceptmethodRes().getResponse().getRelationtypeRolesIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getRelationtypeRolesIterRes().getRole())},ResponseConverter.prototype.isInferred=function(a){return a.getConceptmethodRes().getResponse().getThingIsinferredRes().getInferred()},ResponseConverter.prototype.getDirectType=function(a){const b=a.getConceptmethodRes().getResponse().getThingTypeRes().getType();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.getRelationshipsByRoles=function(a){const b=a.getConceptmethodRes().getResponse().getThingRelationsIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getThingRelationsIterRes().getRelation())},ResponseConverter.prototype.getRolesPlayedByThing=function(a){const b=a.getConceptmethodRes().getResponse().getThingRolesIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getThingRolesIterRes().getRole())},ResponseConverter.prototype.getAttributesByTypes=function(a){const b=a.getConceptmethodRes().getResponse().getThingAttributesIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getThingAttributesIterRes().getAttribute())},ResponseConverter.prototype.getKeysByTypes=function(a){const b=a.getConceptmethodRes().getResponse().getThingKeysIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getThingKeysIterRes().getAttribute())},ResponseConverter.prototype.getValue=function(a){const b=a.getConceptmethodRes().getResponse().getAttributeValueRes().getValue();return b.hasString()?b.getString():b.hasBoolean()?b.getBoolean():b.hasInteger()?b.getInteger():b.hasLong()?b.getLong():b.hasFloat()?b.getFloat():b.hasDouble()?b.getDouble():b.hasDate()?b.getDate():void 0},ResponseConverter.prototype.getOwners=function(a){const b=a.getConceptmethodRes().getResponse().getAttributeOwnersIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getAttributeOwnersIterRes().getThing())},ResponseConverter.prototype.rolePlayersMap=(()=>{var a=_asyncToGenerator(function*(a){const b=a.getConceptmethodRes().getResponse().getRelationRoleplayersmapIter().getId(),c=this.iteratorFactory.createRolePlayerIterator(b),d=yield c.collect(),e=new Map(d.map(function(a){return[a.role.id,a.role]})),f=new Map;d.forEach(function(a){const b=a.role.id;f.has(b)?f.set(b,f.get(b).add(a.player)):f.set(b,new Set([a.player]))});const g=new Map;return f.forEach(function(a,b){g.set(e.get(b),a)}),g});return function(){return a.apply(this,arguments)}})(),ResponseConverter.prototype.rolePlayers=function(a){const b=a.getConceptmethodRes().getResponse().getRelationRoleplayersIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getRelationRoleplayersIterRes().getThing())},ResponseConverter.prototype.getWhen=function(a){const b=a.getConceptmethodRes().getResponse().getRuleWhenRes();return b.hasNull()?null:b.getPattern()},ResponseConverter.prototype.getThen=function(a){const b=a.getConceptmethodRes().getResponse().getRuleThenRes();return b.hasNull()?null:b.getPattern()},ResponseConverter.prototype.getRelationshipTypesThatRelateRole=function(a){const b=a.getConceptmethodRes().getResponse().getRoleRelationsIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getRoleRelationsIterRes().getRelationtype())},ResponseConverter.prototype.getTypesThatPlayRole=function(a){const b=a.getConceptmethodRes().getResponse().getRolePlayersIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getConceptmethodIterRes().getRolePlayersIterRes().getType())},ResponseConverter.prototype.getSchemaConcept=function(a){const b=a.getGetschemaconceptRes();return b.hasNull()?null:this.conceptFactory.createConcept(b.getSchemaconcept())},ResponseConverter.prototype.getConcept=function(a){const b=a.getGetconceptRes();return b.hasNull()?null:this.conceptFactory.createConcept(b.getConcept())},ResponseConverter.prototype.putEntityType=function(a){const b=a.getPutentitytypeRes().getEntitytype();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.putRelationshipType=function(a){const b=a.getPutrelationtypeRes().getRelationtype();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.putAttributeType=function(a){const b=a.getPutattributetypeRes().getAttributetype();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.putRole=function(a){const b=a.getPutroleRes().getRole();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.putRule=function(a){const b=a.getPutruleRes().getRule();return this.conceptFactory.createConcept(b)},ResponseConverter.prototype.getAttributesByValue=function(a){const b=a.getGetattributesIter().getId();return this.iteratorFactory.createConceptIterator(b,a=>a.getGetattributesIterRes().getAttribute())},ResponseConverter.prototype.executeQuery=function(a){const b=a.getQueryIter();return b.hasNull()?null:this.iteratorFactory.createQueryIterator(b.getId())},module.exports=ResponseConverter;