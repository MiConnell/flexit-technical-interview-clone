{{ config(schema='staging', materialized='incremental') }}

select
    {{ dbt_utils.generate_surrogate_key(['order_number','order_line_number']) }} id,
    *,
    {{ current_timestamp() }} data_loaded_at
from {{ ref('sales_data_raw') }}
{% if is_incremental() %}
  where order_date >= (select max(order_date) from {{ this }})
{% endif %}
