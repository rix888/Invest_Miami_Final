class Industry < ActiveRecord::Base

xlsx = Roo::Spreadsheet.open('/MIA16_Health_Graphs_PR.xlsx')
xlsx = Roo::Excelx.new("./new_prices.xlsx")

# Use the extension option if the extension is ambiguous.
xlsx = Roo::Spreadsheet.open('./rails_temp_upload', extension: :xlsx)

xlsx.info
end
