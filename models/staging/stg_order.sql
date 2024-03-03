-- depends_on: {{ ref('stg_sales_data') }}

{{
    config(
        schema='staging',
        materialized='incremental'
    )
}}

select distinct
    order_number,
    order_line_number,
    order_date,
    status
from {{ source('salesforce', 'stg_sales_data') }}

{% if is_incremental() %}
    where order_date >= (select max(order_date) from {{ this }})
{% endif %}
