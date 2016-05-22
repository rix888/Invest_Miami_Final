class IndustriesController < ApplicationController

  # def fetch_excel_data
  #
  #   health_sheets = Excel.new("/app/assests/spreadsheets/MIA16_Health_Graphs_PR.xlsx")
  #   health_sheets.default_sheet = health_sheets.sheets[1]
  #
  #   6.upto(11) do |line|
  #
  #   year = health_sheets.cell(line,'C')
  #   total = health_sheets.cell(line,'D')
  #   facilities = ex.cell(line,'E')
  #
  #   @industry = Industry.create(:year => year,:total => total,:facilities => facilities)
  #
  #   end
  # end
end
