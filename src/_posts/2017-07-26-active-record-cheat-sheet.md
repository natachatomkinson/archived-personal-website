---
layout: post
title: Rails Active Record Cheat Sheet
date: 2017-07-09
type: post
published: true
status: publish
categories:
- reading-notes
tags:
- education
- rails
- active_record
meta:
email: natseg@gmail.com
display_name: natseg
---

Preamble: Sometimes, the hardest part is to be aware an ideal method exists for your purposes.

Notes created based on the [Active Record Query Interface](http://guides.rubyonrails.org/active_record_querying.html)

Active Record Query interface is an alternative to using raw SQL in order to retrieve records from your database.

Each will:

1. convert options to equivalent SQL query
2. use SQL
3. retrieve results
4. convert results to the equivalent ruby object of the appropriate model for every row
5. run after_find then after_initialize callbacks if relevant

List of methods:

|structure|what to know|
|---|---|
`.find + id or [ids]` |raises an ActiveRecord::RecordNotFound error in case of no record |

All methods below:
- do not raise exceptions
- if followed by '!', raise an exception

|structure|what to know|
|---|---|
|`.take(optional n)`|picks one (or n) 'random' record from table, returns nil/no exception in case of no record |
| `.first(optional n) / .last(optional n)` | returns first/last (n) record(s) <br>default -> ordered by primary key with `.order(:some_attribute)` -> ordered by specified attribute <br>with `default_scope` on model -> ordered by scope on model |
`.find_by`|returns record based on attribute search.<br> Bonus: can be written `.find_by_some_attribute_name`|

To perform big queries:

`Table.all` is very expensive:

1. fetch the table in a single pass
2. build a model object per row
3. keep the entire array of model object in memory (depending on the number of records might exceed memory)

2 memory-friendly methods:
- works on model classes and on relations

Options:

- `:batch_size`
- `:start` (which primary key to start from - inclusive)
- `:finish` (which primary key to finish with - exclusive)

|structure|what to know|
|---|---|
|`.find_each`|1. retrieve records in batches 2. yields each one to the block <br> NB:<br>If an order is present, the behaviour depends on the flag `config.active_record.error_on_ignored_order`.<br>If `true`, `ArgumentError` is raised.<br>By default, the order is ignored and a warning issued.<br>This warning can be overridden with the option `:error_on_ignore`. |
|`.find_in_batches`|1. retrieve records in batches<br>yields batches to the block as an array of models|

---

### CONDITIONS

`.where`

conditions can be string, array or hash
Do not use with pure strings => SQL injection

structure:
`("some_attribute = ? AND other_attribute= ?", params[:param], params[:other_param])`

or:
`("some_attribute >= :some_attribute AND other_attribute <= :other_attribute",
{some_attribute: params[:some_attribute], other_attribute: params[:other_attribute]})`

#### Equality:

`(some_attribute: some_value)` || `('some_attribute' => some_value)`

Belongs_to or polymorphic associations can be used:
`Table.where(some_attribute: some_record)`
`Table.joins(:some_attribute).where(some_attributes: { other_attribute: record })`

#### Range:

`Table.where(some_attribute: some_range_start..some_range_end)`

#### Subset:
`Table.where(some_attribute: [somearray])`

#### Not:
`Table.where.not(somecondition)`

### ORDERING
`.order(:some_attribute)`
`.order(some_attribute: :desc) or .order(some_attribute: :asc)`
`.order(some_attribute: :asc, other_attribute: :desc)`
etc.

if using MySQL 5.7.5 and above, on selecting fields from a result set using methods like select, pluck and ids, order method raises ActiveRecord::StatementInvalid  unless the field(s) used in order clause are included in the select list.

### SELECTING

`.select('some_attribute, other_attribute')`

initialises a model object with only these fields
all other fields from the original model do not exist => `ActiveModel::MissingAttributeError: missing attribute: <attribute>`

`.select(:attribute).distinct`

returns a single record per unique value in a certain field

`.select(:attribute).distinct.distinct(false)`

toggles the constraint

### LIMITING/OFFSETTING:

`.limit(number)`

returns limit of records (starting from first by default)

`.offset(number)`

starts record retrieval from number
